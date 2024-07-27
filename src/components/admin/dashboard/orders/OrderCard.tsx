import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function OrderCard() {
  return (
    <Card className="flex flex-row h-24 mb-3">
      <CardBody className="flex flex-row">
        <div className="p-2">
          {" "}
          <LocationOnIcon />
        </div>
        <div className="flex flex-col ml-3">
          <div className=" flex flex-row">
            {" "}
            <div className=" w-56">
              <div className="text-lg"> Confirmed #3123</div>
              <div className="text-medium">Sunil Perera</div>
            </div>
            <div className="flex flex-col justify-items-end w- ">
              <div className=" flex flex-row align-middle content-center gap-x-3  text-xs ">
                <div>
                  {" "}
                  <LocalShippingIcon />
                </div>{" "}
                <div className="text-center content-center ">50 km away</div>
              </div>
              <div className="text-xs"> 2 items</div>
              <div className="text-xs"> 1 hour ago</div>
            </div>
          </div>

          <div className="text-xs flex flex-rpw justify-between">
            <div className="text-green-700 content-end">Pettah</div> <ArrowForwardIcon/> <div className="text-red-700 content-end">Colombo</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
