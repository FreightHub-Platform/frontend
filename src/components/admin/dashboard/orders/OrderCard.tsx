"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { time } from "console";

interface OrderCardProps {
  order: any;
  purchaseOrders: any[];
}

const OrderCard: React.FC<OrderCardProps> = ({ order, purchaseOrders }) => {
  // Fetch additional purchase order details
  const linkedPO = purchaseOrders.find((po) => po.orderId === order.id);

  return (
    <Card className="flex flex-row h-24 mb-3 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl ">
      <CardBody className="flex flex-row">
        <div className="p-2">
          <LocationOnIcon />
        </div>
        <div className="flex flex-col ml-3">
          <div className=" flex flex-row">
            <div className="w-56">
              <div className="text-lg">Confirmed #{order.id}</div>
              <div className="text-medium">
                {linkedPO ? linkedPO.storeName : "Unknown Store"}
              </div>
            </div>
            <div className="flex flex-col justify-items-end">
              <div className="flex flex-row align-middle content-center gap-x-3 text-xs">
                <LocalShippingIcon />
                <div>{linkedPO ? "50 km away" : "N/A"}</div>
              </div>
              <div className="text-xs">{linkedPO ? "2 items" : "No items"}</div>
              <div className="text-xs">
                Last updated:{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
          {/* <div className="text-xs flex flex-row justify-between">
            <div className="text-green-700 content-end">Pettah</div>
            <ArrowForwardIcon />
            <div className="text-red-700 content-end">Colombo</div>
          </div> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderCard;
