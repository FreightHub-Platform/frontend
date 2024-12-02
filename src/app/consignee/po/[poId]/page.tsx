"use client";

import { poById, UpdatePo } from "../../../../utils/consignee";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ConsigneePage = () => {
  const [purchaseData, setConsigneeData] = useState(null);
  const [items, setItemData] = useState([]);
  const [loding, setLoading] = useState(false);
  const path = usePathname();

  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const fetchConsigneeDetails = async () => {
      const consignetId = path.split("/")[3];
      try {
        setLoading(true);
        const poId = { id: consignetId };
        const data = await poById(poId);
        setConsigneeData(data.purchaseOrder);

        const transformedItems = data.items.map((item) => ({
          id: item.id,
          itemName: item.itemName,
          weight: item.weight,
          cbm: item.cbm,
          safeDelivery: item.safeDelivery,
          condition: item.condition,
        }));

        setItemData([...transformedItems]);
      } catch (error) {
        console.error("Error fetching consigner data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConsigneeDetails();
  }, []);

  // Mock data for purchase order and items
  const purchaseOrder = {
    storeName: purchaseData ? purchaseData.storeName : "storeName", // Mocked store name
    otp: purchaseData ? purchaseData.otp : "otp", // Mocked OTP
  };

  // State to manage item status

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setItemData((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, safeDelivery: !item.safeDelivery } // Toggle safeDelivery status
          : item
      )
    );
  };

  // Handle dropdown change
  const handleDropdownChange = (id: number, value: string) => {
    setItemData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, condition: value } : item
      )
    );
  };

  const handleSubmit = async () => {
    const Details = {
      items: items
    }

    try {
      const response = await UpdatePo(Details)
    } catch (error) {
      console.error("Error fetching consigner data:", error);
      setError(true)
    } finally {
      setOpen(true)
    }
    
  }

  return (
    <div className="p-4">
      {/* Consignee and OTP Code Box */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
        <h1 className="text-xl font-bold">Consignee Details</h1>
        <p>
          <strong>Consignee:</strong> {purchaseOrder.storeName}
        </p>
        <p>
          <strong>OTP Code:</strong> {purchaseOrder.otp}
        </p>
      </div>

      {/* Items Table */}
      <div>
        <h2 className="text-lg font-bold mb-4">Items</h2>
        {loding ? (
          <div className="flex justify-center items-center w-full">
            <div>
              <Spinner size="lg" />
            </div>
          </div>
        ) : (
          <div className="overflow-auto h-[480px] custom-scrollbar-horizontal">
            <table className="table-auto w-full border-collapse border border-gray-400">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 z-10">
                    Item Name
                  </th>
                  <th className="border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 z-10">
                    Weight(kg)
                  </th>
                  <th className="border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 z-10">
                    CBM
                  </th>
                  <th className="border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 z-10">
                    Recived
                  </th>
                  <th className="border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 z-10">
                    Condition
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">
                      {item.itemName}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {item.weight}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {item.cbm}
                    </td>
                    <td className="border border-gray-400 px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={item.safeDelivery}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="form-checkbox text-lg"
                      />
                    </td>
                    <td className="border border-gray-400 px-4 py-2 text-center">
                      <select
                        value={item.condition}
                        onChange={(e) =>
                          handleDropdownChange(item.id, e.target.value)
                        }
                        className="border border-gray-300 rounded-md px-2 py-1"
                      >
                        <option value="Good">Good</option>
                        <option value="Damaged">Damaged</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="flex w-full justify-center">
        <button className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        { !error ? 
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
            >
            Database updated success!
          </Alert> 
          :
           <Alert
           onClose={handleClose}
           severity="error"
           variant="filled"
           sx={{ width: '100%' }}
         >
           Something went wrong please refresh and try again!
         </Alert>
        }
       
      </Snackbar>
    </div>
    </div>
  );
};

export default ConsigneePage;
