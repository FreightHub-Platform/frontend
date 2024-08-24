enum OrderStatus {
  pending,
  accepted,
  ongoing,
  completed,
  unfulfilled
}

interface Item {
  id: string;
  itemName: string;
  weight: number;
  cbm: number;
  refrigerated: boolean;
  hazardous: boolean;
  perishable: boolean;
  fragile: boolean;
  status: OrderStatus;
  sequenceNumber: number;
  safeDelivery: boolean;
  poId: number;
  iTypeId: number;
  routeId: number;
}

interface PurchaseOrder {
  id: number;
  poNumber: string;
  storeName: string;
  dropDate: string;
  dropTime: string;
  contactNumber: string;
  email: string;
  status: OrderStatus;
  address: string;
  ltlFlag: boolean;
  dropLocation: string;
  items: Item[];
}

interface Order{
  id: string;
  orderTime: string;
  pickupDate: string;
  fromTime: string;
  toTime: string;
  pickupLocation: string;
  status: OrderStatus;
  userId: string;
  purchaseOrders: PurchaseOrder[];
}