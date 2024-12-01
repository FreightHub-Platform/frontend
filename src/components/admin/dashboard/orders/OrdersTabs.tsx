"use client";

import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OrderCard from "./OrderCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OrdersTabs() {
  const [value, setValue] = useState(0);
  const [orders, setOrders] = useState<any[]>([]);
  const [purchaseOrders, setPurchaseOrders] = useState<any[]>([]);
  const [newOrders, setNewOrders] = useState<any[]>([]);
  const [inTransitOrders, setInTransitOrders] = useState<any[]>([]);
  const [completedOrders, setCompletedOrders] = useState<any[]>([]);

  useEffect(() => {
    // Fetch orders and purchase orders from local storage
    const ordersData = JSON.parse(localStorage.getItem("ordersData") || "[]");
    const purchaseOrdersData = JSON.parse(
      localStorage.getItem("purchaseOrdersData") || "[]"
    );

    setOrders(ordersData);
    setPurchaseOrders(purchaseOrdersData);

    // Filter orders based on status
    const newStatus = ["created", "pending"];
    const inTransitStatus = ["ongoing"];
    const completedStatus = ["completed"];

    setNewOrders(
      ordersData.filter((order: any) => newStatus.includes(order.status))
    );
    setInTransitOrders(
      ordersData.filter((order: any) => inTransitStatus.includes(order.status))
    );
    setCompletedOrders(
      ordersData.filter((order: any) => completedStatus.includes(order.status))
    );
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "orange",
            },
            "& .MuiTab-root": {
              color: "gray",
              "&.Mui-selected": {
                color: "orange",
              },
            },
          }}
          className="h-10"
          aria-label="orders tabs"
        >
          <Tab label="New" {...a11yProps(0)} />
          <Tab label="In Transit" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
          {newOrders.length > 0 ? (
            newOrders.map((order: any) => (
              <OrderCard
                key={order.id}
                order={order}
                purchaseOrders={purchaseOrders}
              />
            ))
          ) : (
            <div>No new orders</div>
          )}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
          {inTransitOrders.length > 0 ? (
            inTransitOrders.map((order: any) => (
              <OrderCard
                key={order.id}
                order={order}
                purchaseOrders={purchaseOrders}
              />
            ))
          ) : (
            <div>No orders in transit</div>
          )}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
          {completedOrders.length > 0 ? (
            completedOrders.map((order: any) => (
              <OrderCard
                key={order.id}
                order={order}
                purchaseOrders={purchaseOrders}
              />
            ))
          ) : (
            <div>No completed orders</div>
          )}
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
