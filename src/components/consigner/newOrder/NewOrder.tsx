"use client";

import Box from "@mui/material/Box";
import ProcessBox from "../../Auth/process/ProcessBox";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";

import MapWithSearch from "../../maps/MapWithSearch";

const steps = [
  {
    title: "",
    semTitle: "Pickup Information",
    pathName: "/consigner/orders/new/pickup_information",
    status: false,
  },
  {
    title: "",
    semTitle: "Purchase Order",
    pathName: "/consigner/orders/new/purchase_order",
    status: false,
  },
  {
    title: "",
    semTitle: "Finalize",
    pathName: "/consigner/orders/new/finalize",
    status: false,
  },
];

const NewOrder = () => {
  const router = useRouter();

  const [pickupdate, setPickupDate] = useState("");
  const [pickupdateError, setPickupdateError] = useState(false);
  const [from, setFrom] = useState("");
  const [fromError, setFromError] = useState(false);
  const [to, setTo] = useState("");
  const [toError, setToError] = useState(false);
  const [timeMissMatch, setTimeMissMatch] = useState(false);

  const handleSubmit = () => {
    let hasError = false;

    if (!pickupdate) {
      setPickupdateError(true);
      hasError = true;
    } else {
      setPickupdateError(false);
    }

    if (!from) {
      setFromError(true);
      hasError = true;
    } else [setFromError(false)];

    if (!to) {
      setToError(true);
      hasError = true;
    } else {
      setToError(false);
    }

    if (from > to) {
      setTimeMissMatch(true);
      hasError = true;
    } else {
      setTimeMissMatch(false);
    }

    if (!hasError) {
      if (localStorage.getItem("ordersDetails") !== null) {
        localStorage.removeItem("ordersDetails");
      }

      const order = {
        pickupDate: pickupdate,
        fromTime: from,
        toTime: to,
        // location,
      };
      localStorage.setItem("ordersDetails", JSON.stringify(order));
      router.push(`/consigner/orders/new/purchase_order`);
    }
  };

  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const today = new Date().toISOString().split("T")[0];

  const handleLocationSelected = (location: { lat: number; lng: number }) => {
    setLocation(location);
    console.log(location);
  };

  return (
    <Box component="section" className="w-3/4">
      <h1 className="text-2xl font-semibold text-center">New Order</h1>
      <Box
        component="section"
        className="border-orange-500 border-2 rounded-md mt-3 bg-white p-3"
      >
        <Box
          component="section"
          sx={{ p: 2, border: "2px solid #FB8C00", borderRadius: "20px" }}
          className="w-3/5 mx-auto"
        >
          <ProcessBox step={steps} completion={0} />
        </Box>
        <Box
          component="section"
          className="flex flex-row h-full align-middle gap-5"
        >
          <div className="flex w-1/3 flex-wrap ">
            <Box
              component="section"
              className=" w-full justify-center flex content-center flex-col h-full align-middle"
            >
              <Box
                component="section"
                sx={{ p: 2, marginBottom: "20px" }}
                className="flex flex-col gap-3"
              >
                <h1 className="text-sm font-semibold ms-3">Pickup Date</h1>

                <TextField
                  size="small"
                  color="warning"
                  error={pickupdateError}
                  id="outlined-basic"
                  label="Date"
                  variant="outlined"
                  type="date"
                  helperText={
                    pickupdateError ? "Please select pickup date" : ""
                  }
                  value={pickupdate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: today,
                  }}
                />
              </Box>
              <Box
                component="section"
                sx={{ p: 2 }}
                className="flex flex-col gap-3"
              >
                <h1 className="text-sm font-semibold ms-3">Pickup Time</h1>

                <div className="flex flex-col gap-4">
                  <TextField
                    size="small"
                    color="warning"
                    error={fromError || timeMissMatch}
                    id="outlined-basic"
                    label="From"
                    variant="outlined"
                    type="time"
                    value={from}
                    helperText={
                      timeMissMatch
                        ? "From time has to be large"
                        : fromError
                        ? "Please enter from time"
                        : ""
                    }
                    onChange={(e) => setFrom(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    size="small"
                    color="warning"
                    error={toError || timeMissMatch}
                    id="outlined-basic"
                    label="To"
                    variant="outlined"
                    type="time"
                    helperText={
                      timeMissMatch
                        ? "From time has to be large"
                        : toError
                        ? "Please enter to time"
                        : ""
                    }
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </Box>
            </Box>
          </div>
          <Box component="section" className="flex flex-col basis-2/3">
            <Box
              component="section"
              sx={{
                p: 2,
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="flex flex-col gap-3 "
            >
              <h1 className="text-sm font-semibold ms-3">Pickup Location</h1>
              <MapWithSearch onPlaceSelected={handleLocationSelected} />
            </Box>
          </Box>
        </Box>
        <Box component="section" sx={{ textAlign: "center" }}>
          <button
            className="bg-primary py-2 px-8 rounded-lg text-white hover:bg-orange-500 text-sm duration-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewOrder;
