"use client";

import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, CircularProgress, Chip } from "@mui/material";
import Image from "next/image";
import styles from "./DriverDetailsModal.module.css";
import { Button } from "@nextui-org/react";
import { api } from "../../../utils/config";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "1000px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  overflowY: "auto",
  maxHeight: "90vh",
  padding: "24px",
};

interface DriverDetailsModalProps {
  driverId: number | null;
  open: boolean;
  onClose: () => void;
}

const DriverDetailsModal: React.FC<DriverDetailsModalProps> = ({
  driverId,
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [driverDetails, setDriverDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (driverId && open) {
      const fetchDriverDetails = async () => {
        try {
          setLoading(true);
          setError(null);

          const jwtToken = localStorage.getItem("jwt");
          const response = await api.post(
            "/driver/single",
            { id: driverId },
            {
              headers: { Authorization: `Bearer ${jwtToken}` },
            }
          );

          setDriverDetails(response.data.data || null);
        } catch (err: any) {
          console.error("Error fetching driver details:", err);
          setError("Failed to load driver details. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      fetchDriverDetails();
    }
  }, [driverId, open]);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box sx={modalStyle}>
        <Typography
          id="modal-title"
          variant="h4"
          fontWeight="bold"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: "16px",
            color: "orange",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          Driver Details
        </Typography>

        {loading ? (
          <Box className="flex justify-center items-center py-4">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography
            color="error"
            variant="body1"
            textAlign="center"
            fontWeight="bold"
          >
            {error}
          </Typography>
        ) : (
          driverDetails && (
            <div className="space-y-6">
              {/* Driver Basic Details */}
              <Typography variant="body1">
                <strong>Full Name:</strong> {driverDetails.driver.fname}{" "}
                {driverDetails.driver.lname}
              </Typography>
              <Typography variant="body1">
                <strong>Username:</strong> {driverDetails.driver.username}
              </Typography>
              <Typography variant="body1">
                <strong>Contact Number:</strong>{" "}
                {driverDetails.driver.contactNumber || "N/A"}
              </Typography>
              <Typography variant="body1">
                <strong>NIC:</strong> {driverDetails.driver.nic}
              </Typography>
              <Typography variant="body1">
                <strong>Address:</strong>{" "}
                {`${driverDetails.driver.addressLine1}, ${driverDetails.driver.addressLine2}, ${driverDetails.driver.city}, ${driverDetails.driver.province}, ${driverDetails.driver.postalCode}`}
              </Typography>
              <Typography variant="body1">
                <strong>Availability:</strong>{" "}
                <Chip
                  size="small"
                  label={driverDetails.driver.availability}
                  color={
                    driverDetails.driver.availability === "available"
                      ? "success"
                      : "error"
                  }
                  variant="outlined"
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                />
              </Typography>
              <Typography variant="body1">
                <strong>Verify Status:</strong>{" "}
                <Chip
                  size="small"
                  label={driverDetails.driver.verifyStatus}
                  color={
                    driverDetails.driver.verifyStatus === "verified"
                      ? "success"
                      : "error"
                  }
                  variant="outlined"
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                />
              </Typography>
              <Typography variant="body1">
                <strong>License Number:</strong>{" "}
                {driverDetails.driver.licenseNumber}
              </Typography>
              <Typography variant="body1">
                <strong>License Expiry:</strong>{" "}
                {new Date(
                  driverDetails.driver.licenseExpiry
                ).toLocaleDateString()}
              </Typography>

              {/* Driver Images */}
              <Typography
                variant="subtitle1"
                className="font-bold"
                sx={{ marginBottom: "12px", textAlign: "center" }}
              >
                Driver Images
              </Typography>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {["nicFrontPic", "nicRearPic", "liFrontPic", "liRearPic"].map(
                  (picKey) => (
                    <Image
                      key={picKey}
                      src={driverDetails.driver[picKey]}
                      alt={picKey}
                      className="driver-image"
                      width={500}
                      height={160}
                    />
                  )
                )}
              </div>

              {/* Bank and Billing Details */}
              <Typography
                variant="subtitle1"
                className="font-bold"
                sx={{ marginTop: "20px" }}
              >
                Bank and Billing Information
              </Typography>
              <Typography variant="body1">
                <strong>Account Number:</strong>{" "}
                {driverDetails.driver.accountNumber || "N/A"}
              </Typography>
              <Typography variant="body1">
                <strong>Bank Name:</strong> {driverDetails.driver.bankName}
              </Typography>
              <Typography variant="body1">
                <strong>Branch Name:</strong> {driverDetails.driver.branchName}
              </Typography>
              <Typography variant="body1">
                <strong>Holder Name:</strong> {driverDetails.driver.holderName}
              </Typography>
              <Image
                src={driverDetails.driver.billingProof}
                alt="Billing Proof"
                width={500}
                height={200}
                className="driver-image"
              />
            </div>
          )
        )}

        <Button
          className="mt-6 w-full"
          color="primary"
          variant="bordered"
          onPress={onClose}
          size="lg"
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "uppercase",
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default DriverDetailsModal;
