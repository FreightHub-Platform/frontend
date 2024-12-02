import { api } from "./config";


//GET PO DETAILS BY ID with axios ----- copy
export const poById = async (poId: any, token: String) => {
  try {
    const response = await api.post('purchase-order/single', poId, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return response.data.data;
    
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
}
};


