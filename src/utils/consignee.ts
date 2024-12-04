import axios from "axios";

//GET PO DETAILS BY ID with axios 
export const poById = async (poId: any) => {
  try {
    const response = await axios.post("/api/purchase-order/single", poId);

    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An unexpected error occurred.");
  }
};


export const UpdatePo = async (items: any) => {
  try {
    const response = await axios.post("/api/item/safe-delivery", items);

    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An unexpected error occurred.");
  }
};