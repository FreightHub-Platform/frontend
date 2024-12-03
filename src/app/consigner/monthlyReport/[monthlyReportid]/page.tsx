"use client";

import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { getConsignerDetails } from "../../../../utils/review";
import { getConsignerReportsById } from "../../../../utils/consigner";
import { usePathname } from "next/navigation";
import { Spinner } from "@nextui-org/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Invoice = () => {

  interface ConsignerData {
    businessName: string;
    brn: string;
    username: string;
    mainNumber: string;
    altNumber?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    province: string;
    postalCode: string;
  }

  const [consignerDetail, setConsignerDetails] = useState(null)
  const pathName = usePathname()


  const [completed, setCompleted] = useState([])
  const [canceled, setCanceled] = useState([])
  const [unfulfillment, setUnfulfillment] = useState([])
  const [loding, setLoading] = useState(false)
  

  useEffect(() => {
    const fetchConsignerDetails = async () => {
      
      try {
        setLoading(true)
        const pid = localStorage.getItem('id')
        const cid = { id: pid };
        const data: ConsignerData = await getConsignerDetails(
          cid,
          localStorage.getItem("jwt")
        );
        setConsignerDetails(data);

        const detail = {
          id: pid,
          yearMonth: pathName.split('/')[3]
        }
        console.log(detail);
        const reportData = await getConsignerReportsById(detail, localStorage.getItem("jwt"))

        const tempCompleted = [];
        const tempCanceled = [];
        const tempUnfulfillment = [];

        reportData.forEach(item => {
          const formattedItem = {
            orderId: `O${item.orderId}`, // Add a prefix to orderId
            routeId: `R${item.routeId}`, // Add a prefix to routeId
            distance: `${parseFloat(item.actualDistanceKm)}km`,
            cost: parseFloat(item.cost)
          };
        
          if (item.status === "completed") {
            tempCompleted.push(formattedItem);
          } else if (item.status === "cancelled") {
            tempCanceled.push({ ...formattedItem, fine: formattedItem.cost * 0.25 });
          } else if (item.status === "unfulfilled") {
            tempUnfulfillment.push(formattedItem);
          }
        });

        setCompleted([...tempCompleted]);
        setCanceled([...tempCanceled]);
        setUnfulfillment([...tempUnfulfillment]);
        
      } catch (error) {
        console.error("Error fetching consigner data:", error);
      } finally {
        setLoading(false)
      }
    };

    fetchConsignerDetails();
  }, []);

  // Sample data
  const consignerDetails = {
    logo: consignerDetail ? consignerDetail.logo : "", // Replace with your logo path
    businessName: consignerDetail ? consignerDetail.businessName : "",
    businessNumber: consignerDetail ? consignerDetail.brn : "",
    // invoiceReleaseDate: "2024-12-02",
  };

  // Chart Data based on the number of orders
  const chartData = {
    labels: ["Completed", "Canceled", "Unfulfilled"],
    datasets: [
      {
        data: [
          completed.length, // Number of completed orders
          canceled.length,  // Number of canceled orders
          unfulfillment.length, // Number of unfulfilled orders
        ],
        backgroundColor: ["#4caf50", "#f44336", "#ff9800"],
        borderColor: ["#3e8e41", "#d32f2f", "#f57c00"],
        borderWidth: 1,
      },
    ],
  };

  const calculateTotal = (data, field) =>
    data.reduce((total, item) => total + item[field], 0);

  const downloadPDF = () => {
    const invoice = document.getElementById("invoice");
  
    // Use html2canvas to capture the chart without extra white space
    html2canvas(invoice, { 
      scrollX: 0, 
      scrollY: -window.scrollY, // Adjust for scroll offset if necessary
      width: invoice.scrollWidth, // Dynamically calculate the width
      height: invoice.scrollHeight, // Dynamically calculate the height
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
  
      // Create a new PDF
      const pdf = new jsPDF("p", "mm", "a4");
  
      // Get image properties and adjust the size for the PDF
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };
  

  return (
    <div className="w-full flex justify-center">
      <div id="invoice" className="bg-white p-6 w-11/12 rounded-2xl shadow-lg">
        {/* Upper Section: Consigner Details */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <img
            src={consignerDetails.logo}
            alt="Logo"
            className="h-16 w-16 object-contain"
          />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{consignerDetails.businessName}</h2>
            <p>Business Number: {consignerDetails.businessNumber}</p>
            {/* <p>Invoice Date: {consignerDetails.invoiceReleaseDate}</p> */}
          </div>
        </div>

        {/* Middle Section: Tables */}
        <div className="mb-6">
          {completed.length > 0 ? 
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Completed Orders</h3>
              <table className="w-full border-collapse border border-gray-300 mb-2">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Order ID</th>
                    <th className="border border-gray-300 px-4 py-2">Route ID</th>
                    <th className="border border-gray-300 px-4 py-2">Distance</th>
                    <th className="border border-gray-300 px-4 py-2">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {completed.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{item.orderId}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.routeId}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.distance}</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. {item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-right font-bold">Total Cost: Rs. {calculateTotal(completed, "cost")}</p>
            </div> : ""
          }
         

          {canceled.length > 0 ? 
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Canceled Orders</h3>
              <table className="w-full border-collapse border border-gray-300 mb-2">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Order ID</th>
                    <th className="border border-gray-300 px-4 py-2">Route ID</th>
                    <th className="border border-gray-300 px-4 py-2">Distance</th>
                    <th className="border border-gray-300 px-4 py-2">Fine</th>
                  </tr>
                </thead>
                <tbody>
                  {canceled.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{item.orderId}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.routeId}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.distance}</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. {item.fine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-right font-bold">Total Fine: Rs. {calculateTotal(canceled, "fine")}</p>
            </div> : ""
          }
          

          {unfulfillment.length > 0 ? 
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Unfulfilled Orders</h3>
              <table className="w-full border-collapse border border-gray-300 mb-2">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Order ID</th>
                    <th className="border border-gray-300 px-4 py-2">Route ID</th>
                    <th className="border border-gray-300 px-4 py-2">Distance</th>
                    <th className="border border-gray-300 px-4 py-2">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {unfulfillment.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{item.orderId}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.routeId}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.distance}</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. {item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-right font-bold">
                Total Cost: Rs. {calculateTotal(unfulfillment, "cost")}
              </p>
            </div> :""
          }  
        </div>

        {/* Bottom Section: Pie Chart */}
        {
          loding ? 
            <div className="flex justify-center items-center w-full h-4/5">
              <div>
                <Spinner size="lg" />
              </div>
            </div> 
          :  (completed.length > 0 || canceled.length > 0 || unfulfillment.length > 0) ?
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Order Breakdown</h3>
              <div style={{ width: '100%', height: '500px' }}>
                <Pie
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    // Allow for custom height and width without overflow:
                    maintainAspectRatio: false,
                    aspectRatio: 1, // Ensures that the chart keeps its aspect ratio
                  }}
                />
              </div>
            </div>
            : <div className="text-center py-10 text-lg text-gray-500">No reports yet</div>
        }
       


        {/* Download Button */}
        <button
          onClick={downloadPDF}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-xl shadow-md hover:bg-blue-600 transition duration-300"
        >
          Download Invoice as PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
