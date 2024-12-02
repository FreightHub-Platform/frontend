"use client";

import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, CircularProgress, Chip } from "@mui/material";
import Image from "next/image";
import styles from "./VehicleDetailsModal.module.css";
import { Button } from "@nextui-org/react";
import { api } from "../../../utils/config";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  overflowY: "auto",
  maxHeight: "90vh",
  padding: "24px",
};

interface VehicleDetailsModalProps {
  vehicleId: number | null;
  open: boolean;
  onClose: () => void;
}

const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({
  vehicleId,
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [vehicleDetails, setVehicleDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (vehicleId && open) {
      const fetchVehicleDetails = async () => {
        try {
          setLoading(true);
          setError(null);

          const jwtToken = localStorage.getItem("jwt");
          const response = await api.post(
            "/vehicle/single",
            { id: vehicleId },
            {
              headers: { Authorization: `Bearer ${jwtToken}` },
            }
          );

          setVehicleDetails(response.data.data.vehicle || null);
        } catch (err: any) {
          console.error("Error fetching vehicle details:", err);
          setError("Failed to load vehicle details. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      fetchVehicleDetails();
    }
  }, [vehicleId, open]);

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
          Vehicle Details
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
          vehicleDetails && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Typography variant="body1">
                  <strong>License No:</strong> {vehicleDetails.licenseNo}
                </Typography>
                <Typography variant="body1">
                  <strong>Model:</strong> {vehicleDetails.model}
                </Typography>
                <Typography variant="body1">
                  <strong>Make:</strong> {vehicleDetails.make}
                </Typography>
                <Typography variant="body1">
                  <strong>Year:</strong> {vehicleDetails.year.trim()}
                </Typography>
                <Typography variant="body1">
                  <strong>Color:</strong> {vehicleDetails.color.trim()}
                </Typography>
                <Typography variant="body1">
                  <strong>Availability:</strong>{" "}
                  <Chip
                    size="small"
                    label={vehicleDetails.availability}
                    color={
                      vehicleDetails.availability === "available"
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
                    label={vehicleDetails.verifyStatus}
                    color={
                      vehicleDetails.verifyStatus === "verified"
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
                  <strong>Crane:</strong>{" "}
                  {vehicleDetails.craneFlag ? "Yes" : "No"}
                </Typography>
                <Typography variant="body1">
                  <strong>Refrigeration:</strong>{" "}
                  {vehicleDetails.refrigFlag ? "Yes" : "No"}
                </Typography>
                <Typography variant="body1">
                  <strong>License Expiry:</strong>{" "}
                  {new Date(vehicleDetails.licenseExpiry).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Insurance Expiry:</strong>{" "}
                  {new Date(
                    vehicleDetails.insuranceExpiry
                  ).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Vehicle Type:</strong>{" "}
                  {vehicleDetails.vtypeId.type.trim()}
                </Typography>
                <Typography variant="body1">
                  <strong>Max Capacity:</strong>{" "}
                  {vehicleDetails.vtypeId.maxCapacity} tons
                </Typography>
              </div>

              <div>
                <Typography
                  variant="subtitle1"
                  className="font-bold"
                  sx={{ marginBottom: "12px", textAlign: "center" }}
                >
                  Vehicle Images
                </Typography>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["registrationPic", "frontPic", "rearPic", "side1Pic"].map(
                    (picKey) => (
                      <Image
                        key={picKey}
                        src={vehicleDetails[picKey]}
                        alt={picKey}
                        className="vehicle-image"
                        width={500}
                        height={160}
                      />
                    )
                  )}
                </div>
              </div>
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

export default VehicleDetailsModal;
