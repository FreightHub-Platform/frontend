"use client";
import React, { useEffect, useState } from "react";
import CommonSummaryCardSmall from "../../../common/card/CommonSummaryCardSmall";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";

const DashboardSummaryCards = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [driverData, setDriverData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    setVehicleData(JSON.parse(localStorage.getItem("vehiclesData") || "[]"));
    setDriverData(JSON.parse(localStorage.getItem("driversData") || "[]"));
    setOrdersData(
      JSON.parse(localStorage.getItem("purchaseOrdersData") || "[]")
    );
    setUsersData(JSON.parse(localStorage.getItem("usersData") || "[]"));
  }, []);

  // Calculated Stats
  const totalActiveVehicles = vehicleData.filter(
    (v) => v.availability === "available"
  ).length;
  const totalVerifiedDrivers = driverData.filter(
    (d) => d.verifyStatus === "verified"
  ).length;
  const pendingOrders = ordersData.filter((o) => o.status === "pending").length;

  const activeUsers = usersData.filter((u) => u.status === "active").length;
  const pendingUsers = usersData.filter((u) => u.status === "pending").length;
  const inactiveUsers = usersData.filter((u) => u.status === "inactive").length;
  const totalUsers = usersData.length;

  const userSubtitle = `Active: ${activeUsers}, Pending: ${pendingUsers}, Inactive: ${inactiveUsers}`;

  return (
    <div className=" flex gap-6 px-6">
      <CommonSummaryCardSmall
        borderColor="#4CAF50"
        hoverBorderColor="#388E3C"
        Title="Active Vehicles"
        Subtitle="Currently operational vehicles"
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={totalActiveVehicles}
        Icon={DirectionsCarIcon}
      />

      <CommonSummaryCardSmall
        borderColor="#FF9800"
        hoverBorderColor="#F57C00"
        Title="Verified Drivers"
        Subtitle="Drivers cleared for operations"
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={totalVerifiedDrivers}
        Icon={VerifiedUserIcon}
      />

      <CommonSummaryCardSmall
        borderColor="#F44336"
        hoverBorderColor="#D32F2F"
        Title="Pending Orders"
        Subtitle="Orders awaiting action"
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={pendingOrders}
        Icon={ShoppingCartIcon}
      />

      <CommonSummaryCardSmall
        borderColor="#2196F3"
        hoverBorderColor="#1976D2"
        Title="System Users"
        Subtitle={userSubtitle}
        UpdatedDate={new Date().toLocaleDateString()}
        Quantity={totalUsers}
        Icon={PeopleIcon}
      />
    </div>
  );
};

export default DashboardSummaryCards;
