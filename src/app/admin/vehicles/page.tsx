"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import VehicleDataTable from "../../../components/admin/vehicles/VehicleDataTable";
import DriversDataTable from "../../../components/admin/vehicles/DriversDataTable";
import SuppliersDataTable from "../../../components/admin/vehicles/SupplierDataTable";
import SummaryCardSmall from "../../../components/admin/dashboard/SummaryCardSmall";
import AuthGuard from "../../../components/common/auth/AuthGurd";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AuthGuard>
        <div className="flex flex-row mb-6 gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
          <SummaryCardSmall
            borderColor="#4e46e590"
            hoverBorderColor="#4e46e5"
          />
          <SummaryCardSmall
            borderColor="#06ce6390"
            hoverBorderColor="#04a152"
          />
          <SummaryCardSmall
            borderColor="#d148ec90"
            hoverBorderColor="#cf34d4"
          />
          <SummaryCardSmall
            borderColor="#e5464e90"
            hoverBorderColor="#c53030"
          />
        </div>

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
              <Tab
                label={<span className="text-2xl">Suppliers</span>}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <VehicleDataTable />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <DriversDataTable />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <SuppliersDataTable />
          </CustomTabPanel>
        </Box>
      </AuthGuard>
    </>
  );
};

export default Vehicles;
