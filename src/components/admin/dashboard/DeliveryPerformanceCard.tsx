import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface DeliveryPerformanceCardProps {
  icon: string;
  text: string;
  amount: string;
  upordown: string;
  percentage: string;
  bgColor: string;
}

export default function DeliveryPerformanceCard({
  icon,
  text,
  amount,
  upordown,
  percentage,
  bgColor,
}: DeliveryPerformanceCardProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-x-7">
        <div className={`p-4 rounded-xl ${bgColor}`}>
          {" "}
          {icon === "gift" && <CardGiftcardIcon />}
        </div>
        <div className="flex flex-col">
          <div>{text}</div>
          {upordown === "up" && (
            <div className="flex flex-row gap-x-5">
              <div className="text-green-600">
                <ExpandLessIcon />
              </div>
              <div className="text-green-600">{percentage}</div>
            </div>
          )}
          {upordown === "down" && (
            <div className="flex flex-row">
              <div className="text-red-600">
                <ExpandMoreIcon />
              </div>
              <div className="text-red-600">{percentage}</div>
            </div>
          )}
        </div>
      </div>
      <div>{amount}</div>
    </div>
  );
}
