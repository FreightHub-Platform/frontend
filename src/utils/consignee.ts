import { api } from "./config";

// PO - OTP
export const getPurchaseOrder = async (id: number) => {
  try {
    const response = await api.post("/purchase-order/single", { id });
    return response.data.data.otp;
  } catch (error) {
    console.error("Error fetching purchase order:", error);
    throw error;
  }
};

// PO - items
export const getItemsByPurchaseOrder = async (poId: number) => {
  try {
    const response = await api.post("/item/po", { id: poId });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
