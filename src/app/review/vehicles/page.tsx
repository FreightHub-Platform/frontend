"use client"

import Vehicles from "../../../components/review/vehicles/Vehicles"

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";

const VehiclePage = () => {

  const [open, setOpen] = React.useState(false);

  return(
    <div className="flex justify-center">
      <Vehicles onViewMore={(state) => setOpen(state)}/>

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

export default VehiclePage