"use client";

import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, CircularProgress, Chip } from "@mui/material";
import { Button } from "@nextui-org/react";
import { api } from "../../../utils/config";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  overflowY: "auto",
  maxHeight: "90vh",
  padding: "24px",
};

interface ViewUserModalProps {
  userId: number | null;
  open: boolean;
  onClose: () => void;
}

interface UserData {
  id: number;
  username: string;
  role: string;
  name: string;
  mobileNumber: string | null;
  createdDate: string;
  activeStatus: boolean;
  lastLoginDate: string | null;
  updatedDate: string;
}

const ViewUserModal: React.FC<ViewUserModalProps> = ({
  userId,
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUserDetails = async (userId) => {
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await api.post(
        "/user/id",
        userId, // Pass the raw userId directly
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json", // Ensure Content-Type is application/json
          },
        }
      );
      console.log("User Details:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  };

  // Usage in your React component
  useEffect(() => {
    if (userId && open) {
      const loadUserDetails = async () => {
        try {
          setLoading(true);
          setError(null);
          const userDetails = await fetchUserDetails(userId);
          setUserData(userDetails.data || null);
        } catch (err) {
          setError("Failed to load user details. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      loadUserDetails();
    }
  }, [userId, open]);

  console.log("userId:", userId, "open:", open);

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
            color: "Orange",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          User Details
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
          userData && (
            <div className="space-y-4">
              <Typography variant="body1">
                <strong>Full Name:</strong> {userData.name}
              </Typography>
              <Typography variant="body1">
                <strong>Username:</strong> {userData.username}
              </Typography>
              <Typography variant="body1">
                <strong>Role:</strong>{" "}
                <Chip
                  label={
                    userData.role === "review_board"
                      ? "Review Board"
                      : userData.role
                  }
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                />
              </Typography>
              {userData.role !== "review_board" && (
                <Typography variant="body1">
                  <strong>Mobile Number:</strong>{" "}
                  {userData.mobileNumber || "N/A"}
                </Typography>
              )}
              <Typography variant="body1">
                <strong>Account Status:</strong>{" "}
                <Chip
                  label={
                    userData.role === "review_board" || userData.activeStatus
                      ? "Active"
                      : "Inactive"
                  }
                  color={
                    userData.role === "review_board" || userData.activeStatus
                      ? "success"
                      : "error"
                  }
                  size="small"
                  sx={{
                    fontWeight: "bold",
                  }}
                />
              </Typography>
              {userData.role !== "review_board" && (
                <>
                  <Typography variant="body1">
                    <strong>Created Date:</strong>{" "}
                    {new Date(userData.createdDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Last Updated:</strong>{" "}
                    {new Date(userData.updatedDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Last Login:</strong>{" "}
                    {userData.lastLoginDate
                      ? new Date(userData.lastLoginDate).toLocaleDateString()
                      : "Never"}
                  </Typography>
                </>
              )}
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

export default ViewUserModal;
