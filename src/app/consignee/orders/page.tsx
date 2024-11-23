"use client";
import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: "001", received: false, condition: "" },
    { id: "002", received: false, condition: "" },
    
  ]);

  const handleReceivedChange = (index: number) => {
    const updatedOrders = [...orders];
    updatedOrders[index].received = !updatedOrders[index].received;
    setOrders(updatedOrders);
  };

  const handleConditionChange = (index: number, value: string) => {
    const updatedOrders = [...orders];
    updatedOrders[index].condition = value;
    setOrders(updatedOrders);
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Purchase Order Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Order ID</th>
            <th className="border border-gray-300 p-2">Received</th>
            <th className="border border-gray-300 p-2">Condition of Goods</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="text-center">
              <td className="border border-gray-300 p-2">{order.id}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="checkbox"
                  checked={order.received}
                  onChange={() => handleReceivedChange(index)}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  value={order.condition}
                  onChange={(e) =>
                    handleConditionChange(index, e.target.value)
                  }
                  className="p-1 border border-gray-300 rounded"
                >
                  <option value="">Select</option>
                  <option value="Good">Good</option>
                  <option value="Damaged">Damaged</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;


// const Orders = () => {

//   return(
//     <>
//       Ongoing Order Details
//     </>
//   )
// }

// export default Orders;