"use client";

import { poById } from "../../../../utils/consignee";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ConsigneePage = () => {
  interface ConsigneeData {
    otp: string;
    store_name: string;
    item_name: string;
  }

  const [consigneeData, setConsigneeData] = useState(null);
  const path = usePathname();

  useEffect(() => {
    const fetchConsigneeDetails = async () => {
      const consignetId = path.split("/")[3];
      try {
        // setSubmitting(true);
        const poId = { id: consignetId };
        const data: ConsigneeData = await poById(
          poId,
          localStorage.getItem("jwt")
        );
        setConsigneeData(data);
        // setSubmitting(false);
      } catch (error) {
        console.error("Error fetching consigner data:", error);
        // setSubmitting(false);
      }
    };

    fetchConsigneeDetails();
  }, []);

  useEffect(() => {
    console.log(consigneeData);
  }, [consigneeData]);

  // Mock data for purchase order and items
  const purchaseOrder = {
    storeName: "ABC Store", // Mocked store name
    otp: "123456", // Mocked OTP
  };

  const items = [
    { id: 1, itemName: "Item A" },
    { id: 2, itemName: "Item B" },
    { id: 3, itemName: "Item C" },
  ];

  // State to manage item status
  const [itemStatus, setItemStatus] = useState(
    items.map((item) => ({
      id: item.id,
      received: false, // Initial checkbox state
      condition: "Good", // Initial dropdown value
    }))
  );

  // Handle checkbox change
  const handleCheckboxChange = (id: number) => {
    setItemStatus((prevStatus) =>
      prevStatus.map((status) =>
        status.id === id ? { ...status, received: !status.received } : status
      )
    );
  };

  // Handle dropdown change
  const handleDropdownChange = (id: number, value: string) => {
    setItemStatus((prevStatus) =>
      prevStatus.map((status) =>
        status.id === id ? { ...status, condition: value } : status
      )
    );
  };

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
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Item Name</th>
              <th className="border border-gray-400 px-4 py-2">Received</th>
              <th className="border border-gray-400 px-4 py-2">Condition</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-400 px-4 py-2">
                  {item.itemName}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={
                      itemStatus.find((status) => status.id === item.id)
                        ?.received || false
                    }
                    onChange={() => handleCheckboxChange(item.id)}
                    className="form-checkbox"
                  />
                </td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  <select
                    value={
                      itemStatus.find((status) => status.id === item.id)
                        ?.condition || "Good"
                    }
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
    </div>
  );
};

export default ConsigneePage;
