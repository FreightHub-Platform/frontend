"use client";

import React from "react";
import CommonSummaryCardSmall from "../../common/card/CommonSummaryCardSmall";
import GarageIcon from "@mui/icons-material/Garage";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

type VehicleSummaryProps = {
  vehicleData: any[];
  driverData: any[];
};

export default function VehicleSummaryCards({
  vehicleData,
  driverData,
}: VehicleSummaryProps) {
  // Calculate metrics using data from props
  const totalVehicles = vehicleData.length;
  const availableVehicles = vehicleData.filter(
    (vehicle) => vehicle.availability === "available"
  ).length;
  const verifiedDrivers = driverData.filter(
    (driver) => driver.verifyStatus === "verified"
  ).length;
  const pendingActions =
    vehicleData.filter((vehicle) => vehicle.availability === "unavailable")
      .length +
    driverData.filter((driver) => driver.verifyStatus === "pending").length;

  return (
    <div className="flex flex-row gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
      <CommonSummaryCardSmall
        borderColor="#4e46e590"
        hoverBorderColor="#4e46e5"
        Title="Total Vehicles"
        Subtitle="Total fleet size"
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={totalVehicles}
        Icon={GarageIcon}
      />
      <CommonSummaryCardSmall
        borderColor="#06ce6390"
        hoverBorderColor="#04a152"
        Title="Available Vehicles"
        Subtitle="Vehicles ready for use"
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={availableVehicles}
        Icon={DirectionsCarIcon}
      />
      <CommonSummaryCardSmall
        borderColor="#ffa50090"
        hoverBorderColor="#ffa500"
        Title="Verified Drivers"
        Subtitle="Drivers cleared for operations"
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={verifiedDrivers}
        Icon={VerifiedUserIcon}
      />
      <CommonSummaryCardSmall
        borderColor="#d148ec90"
        hoverBorderColor="#cf34d4"
        Title="Pending Actions"
        Subtitle="Vehicles/Drivers needing attention"
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={pendingActions}
        Icon={WarningAmberIcon}
      />
    </div>
  );
}
