"use client";

import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AuthGuard from "../../../components/common/auth/AuthGurd";
import VehicleSummaryCards from "../../../components/admin/vehicles/VehicleSummaryCard";
import VehicleDetailsTable from "../../../components/admin/vehicles/VehicleDetailsTable";
import DriverDetailsTabple from "../../../components/admin/vehicles/DriverDetailsTabple";
import { Spinner } from "@nextui-org/react";

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

const Vehicles = () => {
  const [vehicleData, setVehicleData] = useState<any[] | null>(null);
  const [driverData, setDriverData] = useState<any[] | null>(null);
  const [loadingCards, setLoadingCards] = useState<boolean>(true); // Only for cards
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchLocalStorageData = async () => {
      const storedVehicles = localStorage.getItem("vehiclesData");
      const storedDrivers = localStorage.getItem("driversData");

      await new Promise((resolve) => setTimeout(resolve, 500));

      setVehicleData(storedVehicles ? JSON.parse(storedVehicles) : []);
      setDriverData(storedDrivers ? JSON.parse(storedDrivers) : []);
      setLoadingCards(false);
    };

    fetchLocalStorageData();
  }, []);

  return (
    <>
      <AuthGuard>
        {/* Summary Cards Section */}
        <div className="flex flex-row mb-6 gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
          {loadingCards ? (
            <div className="flex items-center justify-center w-full h-[150px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <VehicleSummaryCards
              vehicleData={vehicleData}
              driverData={driverData}
            />
          )}
        </div>

        {/* Tabs Section */}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
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
            >
              <Tab
                label={<span className="text-2xl">Vehicles</span>}
                {...a11yProps(0)}
              />
              <Tab
                label={<span className="text-2xl">Drivers</span>}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <VehicleDetailsTable />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <DriverDetailsTabple />
          </CustomTabPanel>
        </Box>
      </AuthGuard>
    </>
  );
};

export default Vehicles;
