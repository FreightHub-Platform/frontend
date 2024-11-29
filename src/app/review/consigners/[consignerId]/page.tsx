"use client";

import Logo from "../../../../components/review/consigners/info/Logo";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getConsignerDetails, verifyConsigner } from "../../../../utils/review";
import { updateNotification } from "../../../../utils/notification";

const ConsignerDetails = () => {
  interface ConsignerData {
    businessName: string;
    brn: string;
    username: string;
    mainNumber: string;
    altNumber?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    province: string;
    postalCode: string;
  }

  const consignerStatus = false;

  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [sentMail, setSentMail] = useState(false);

  const [consignerData, setConsignerData] = useState(null);


  const path = usePathname();

  const handleEmailSent = async (e, type) => {
    e.preventDefault();
    setSubmitting(true);

    const response = await fetch("api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "Nuwan Fernando",
        to: "fnimal402@gmail.com",
        mailType: type,
      }),
    });

    const { success, error } = await response.json();
    if (success) {
      setSentMail(true);
      setOpen(true);
    } else if (error) {
      setOpen(true);
    }

    setSubmitting(false);
  };

  //Meka handle verify thana meka ona widiyata hadaganna @GEETHIKA
  const handleVerify = async (e, type) => {
    e.preventDefault();
    setSubmitting(true);
    const consignetId = path.split("/")[3];
    try {
      const cid = {
        id: consignetId,
      };
      const response = await verifyConsigner(cid, localStorage.getItem("jwt"));
      if (response == 200) {
        // response eka succes nm yawnna
        handleEmailSent(e, type);
        const notifactionDetails = {
          date: new Date().toISOString().slice(0, 19),
          body: "The account has been successfully verified.",
          read: false,
        };
        const res = await updateNotification(consignetId, notifactionDetails);
      }
    } catch (error) {
      console.error("Error fetching consigner data:", error);
    }
  };

  /* Methana function eka gahaganna @GEETHIKA*/
  useEffect(() => {
    const fetchConsignerDetails = async () => {
      const consignetId = path.split("/")[3];
      try {
        setSubmitting(true);
        const cid = { id: consignetId };
        const data: ConsignerData = await getConsignerDetails(
          cid,
          localStorage.getItem("jwt")
        );
        setConsignerData(data);
        setSubmitting(false);
      } catch (error) {
        console.error("Error fetching consigner data:", error);
        setSubmitting(false);
      }
    };

    fetchConsignerDetails();
  }, []);

  useEffect(() => {
    console.log(consignerData);
  }, [consignerData]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-11/12 mb-3">
        <div className="bg-white p-5 rounded-2xl">
          <div
            className="p-1 w-full flex justify-between mb-3 rounded-lg"
            style={{ backgroundColor: "#FF9800" }}
          >
            <div className="flex w-full text-white font-bold justify-center">
              Consigner Details
            </div>
            {!consignerStatus ? (
              <form onSubmit={(e) => handleEmailSent(e, "businessMissMatch")}>
                <button
                  title="Submit"
                  type="submit"
                  className="me-4 hover:text-white cursor-pointer"
                >
                  <ForwardToInboxIcon />
                </button>
              </form>
            ) : null}
          </div>
          <div className="flex justify-center items-center">
            <Logo />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div>
              <table className="table-fixed w-full">
                <tbody className="text-sm flex flex-col justify-between h-56">
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Business Name
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      {consignerData?.businessName || "N/A"}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Business Registration Number
                    </td>
                    <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">
                      {consignerData?.brn || "N/A"}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Email
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      {consignerData?.username || "N/A"}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Main Contact Number
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg flex items-center">
                      {consignerData?.mainNumber || "N/A"}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Alternative altNumber
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg flex items-center">
                      {consignerData?.altNumber || "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="table-fixed w-full">
                <tbody className="text-sm flex flex-col justify-between h-56">
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Address Line 1
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      {consignerData ? consignerData.addressLine1 : null}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Address Line 2
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      {consignerData ? consignerData.addressLine2 : null}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      City
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      {consignerData ? consignerData.city : null}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Province
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      {consignerData ? consignerData.province : null}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Postal Code
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      {consignerData ? consignerData.postalCode : null}
                    </td>
                  </tr>
                  <tr className="flex mb-1">
                    <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">
                      Document
                    </td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      <a
                        href={"/pdf/1.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Image
                          src="/images/pdf.svg"
                          alt="PDF icon"
                          width={30}
                          height={30}
                        />
                        1.pdf
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center">
            {!consignerStatus ? (
              <form onSubmit={(e) => handleVerify(e, "businessVerified")}>
                <button
                  type="submit"
                  className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-6"
                >
                  Verify Consigner
                </button>
              </form>
            ) : null}
          </div>
        </div>
        <div>
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={submitting}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={sentMail ? "success" : "error"}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {sentMail ? "Email sent successfully!" : "Failed to send email!"}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default ConsignerDetails;
