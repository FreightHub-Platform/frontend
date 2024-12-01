"use client";

import { GetServerSideProps } from "next";
import { getPurchaseOrder, getItemsByPurchaseOrder} from "../../../../utils/consignee";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { poId } = context.query;

  try {
    const purchaseOrder = await getPurchaseOrder(Number(poId));
    const items = await getItemsByPurchaseOrder(Number(poId));

    return { props: { purchaseOrder, items } };
  } catch (error) {
    return { notFound: true };
  }
};

const ConsigneePage = ({ purchaseOrder, items }: any) => {
  const [itemStatus, setItemStatus] = useState(
    items.map((item: any) => ({
      id: item.id,
      received: false, 
      condition: "Good", 
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
            {items.map((item: any) => (
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




//"use client";
// import { useState } from "react";

// const ConsigneePage = () => {
//   // Mock data for purchase order and items
//   const purchaseOrder = {
//     storeName: "ABC Store", // Mocked store name
//     otp: "123456", // Mocked OTP
//   };

//   const items = [
//     { id: 1, itemName: "Item A" },
//     { id: 2, itemName: "Item B" },
//     { id: 3, itemName: "Item C" },
//   ];

//   // State to manage item status
//   const [itemStatus, setItemStatus] = useState(
//     items.map((item) => ({
//       id: item.id,
//       received: false, // Initial checkbox state
//       condition: "Good", // Initial dropdown value
//     }))
//   );

//   // Handle checkbox change
//   const handleCheckboxChange = (id: number) => {
//     setItemStatus((prevStatus) =>
//       prevStatus.map((status) =>
//         status.id === id ? { ...status, received: !status.received } : status
//       )
//     );
//   };

//   // Handle dropdown change
//   const handleDropdownChange = (id: number, value: string) => {
//     setItemStatus((prevStatus) =>
//       prevStatus.map((status) =>
//         status.id === id ? { ...status, condition: value } : status
//       )
//     );
//   };

//   return (
//     <div className="p-4">
//       {/* Consignee and OTP Code Box */}
//       <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
//         <h1 className="text-xl font-bold">Consignee Details</h1>
//         <p>
//           <strong>Consignee:</strong> {purchaseOrder.storeName}
//         </p>
//         <p>
//           <strong>OTP Code:</strong> {purchaseOrder.otp}
//         </p>
//       </div>

//       {/* Items Table */}
//       <div>
//         <h2 className="text-lg font-bold mb-4">Items</h2>
//         <table className="table-auto w-full border-collapse border border-gray-400">
//           <thead>
//             <tr>
//               <th className="border border-gray-400 px-4 py-2">Item Name</th>
//               <th className="border border-gray-400 px-4 py-2">Received</th>
//               <th className="border border-gray-400 px-4 py-2">Condition</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item) => (
//               <tr key={item.id}>
//                 <td className="border border-gray-400 px-4 py-2">
//                   {item.itemName}
//                 </td>
//                 <td className="border border-gray-400 px-4 py-2 text-center">
//                   <input
//                     type="checkbox"
//                     checked={
//                       itemStatus.find((status) => status.id === item.id)
//                         ?.received || false
//                     }
//                     onChange={() => handleCheckboxChange(item.id)}
//                     className="form-checkbox"
//                   />
//                 </td>
//                 <td className="border border-gray-400 px-4 py-2 text-center">
//                   <select
//                     value={
//                       itemStatus.find((status) => status.id === item.id)
//                         ?.condition || "Good"
//                     }
//                     onChange={(e) =>
//                       handleDropdownChange(item.id, e.target.value)
//                     }
//                     className="border border-gray-300 rounded-md px-2 py-1"
//                   >
//                     <option value="Good">Good</option>
//                     <option value="Damaged">Damaged</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ConsigneePage;
