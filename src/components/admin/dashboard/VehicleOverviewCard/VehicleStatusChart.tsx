"use client";
import React, { useEffect, useState } from "react";
import SingleStackedBarChart from "./SingleStackedBarChart";
import Divider from "@mui/material/Divider";

const VehicleStatusChart: React.FC = () => {
  const [available, setAvailable] = useState<number>(0);
  const [unavailable, setUnavailable] = useState<number>(0);

  useEffect(() => {
    const vehicleData = JSON.parse(
      localStorage.getItem("vehiclesData") || "[]"
    );

    const availableCount = vehicleData.filter(
      (vehicle: any) => vehicle.availability === "available"
    ).length;

    const unavailableCount = vehicleData.filter(
      (vehicle: any) => vehicle.availability === "unavailable"
    ).length;

    setAvailable(availableCount);
    setUnavailable(unavailableCount);
  }, []);

  return (
    <div className="p-5 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4"></h2>
      <SingleStackedBarChart available={available} unavailable={unavailable} />
      <Divider className="my-4" />
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center h-12">
          <span className="font-medium">Available Vehicles:</span>
          <div className="flex items-center space-x-2">
            <span className="text-lg">{available}</span>
            <span className="text-sm text-gray-500">
              ({((available / (available + unavailable)) * 100).toFixed(2)}%)
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center h-12">
          <span className="font-medium">Unavailable Vehicles:</span>
          <div className="flex items-center space-x-2">
            <span className="text-lg">{unavailable}</span>
            <span className="text-sm text-gray-500">
              ({((unavailable / (available + unavailable)) * 100).toFixed(2)}%)
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center h-12">
          <span className="font-medium">Total Vehicles:</span>
          <span className="text-lg">{available + unavailable}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleStatusChart;
