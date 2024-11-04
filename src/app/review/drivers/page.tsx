"use client"

import Drivers from "../../../components/review/drivers/Drivers"

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";

const DriverPage = () => {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex justify-center">
      <Drivers onViewMore={() => setOpen(true)}/>
      <div>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
}

export default DriverPage