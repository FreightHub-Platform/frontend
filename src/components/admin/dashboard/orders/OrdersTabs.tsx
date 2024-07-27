"use client";

import * as React from "react";
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%"}}>
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
          aria-label="basic tabs example"
        >
          <Tab className="scroll-auto 	" label="New" {...a11yProps(0)} />
          <Tab label="In Transit" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel  value={value} index={0}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
    
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <OrderCard />
        <OrderCard />
   
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <OrderCard />
        <OrderCard />
        <OrderCard />{" "}
      </CustomTabPanel>
    </Box>
  );
}
