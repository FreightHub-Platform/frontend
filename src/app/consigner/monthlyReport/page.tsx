"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getConsignerReports } from "../../../utils/consigner";
import { Spinner } from "@nextui-org/react";

const Reports = () => {

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Sample data for the table
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMonths = async () => {   
      try {
        setLoading(true);
        const cid = { id: localStorage.getItem('id') };
        const reports = await getConsignerReports(cid, localStorage.getItem("jwt"));
        const output = reports.map(item => {
          const [year, monthIndex] = item.split('-');
          return {
            year: parseInt(year), 
            month: months[parseInt(monthIndex) - 1]
          };
        });
        setData(output);
        setInputData(reports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMonths();
  },[]);

  const [selectedYear, setSelectedYear] = useState("All");
  const router = useRouter();
  const pathName = usePathname();

  const handleNavigation = (id) => {
    const yearMonth = inputData[id];
    router.push(`${pathName}/${yearMonth}`);
  };

  // Function to handle year filtering
  const handleFilterChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // Filtered data based on the selected year
  const filteredData =
    selectedYear === "All" ? data : data.filter((item) => item.year === parseInt(selectedYear));

  return (
    <div className="w-full mb-3 flex justify-center">
      <div className="bg-white p-5 w-11/12 rounded-2xl h-[588px]">
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="yearFilter" className="font-medium mr-2">
            Filter by Year:
          </label>
          <select
            id="yearFilter"
            value={selectedYear}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          >
            <option value="All">All</option>
            {[...new Set(data.map((item) => item.year))].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-y-scroll h-[480px] custom-scrollbar-horizontal">
          {filteredData.length === 0 && !loading ? (
            <div className="text-center py-10 text-lg text-gray-500">
              No reports yet
            </div>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead className="sticky top-0 bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Year</th>
                  <th className="border border-gray-300 px-4 py-2">Month</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation(index)}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.year}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.month}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {loading && (
            <div className="flex justify-center items-center w-full h-4/5">
              <Spinner size="lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
