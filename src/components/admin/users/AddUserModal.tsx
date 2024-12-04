"use client";
import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  CircularProgress,
  TextField,
  MenuItem,
} from "@mui/material";
import { Button } from "@nextui-org/react";
import { api, userApi } from "../../../utils/config";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  overflowY: "auto",
  maxHeight: "90vh",
};

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
  onUserAdded: () => void;
}

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Review Board", value: "review_board" },
];

const AddUserModal: React.FC<AddUserModalProps> = ({
  open,
  onClose,
  onUserAdded,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
    mobileNumber: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleAddUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const jwtToken = localStorage.getItem("jwt");
      const response = await api.post(
        "/auth/register",
        { ...formData },
        {
          headers: { Authorization: `Bearer ${jwtToken}` },
        }
      );

      if (response.status === 200 || response.status === 201) {
        onUserAdded();
        onClose();
      } else {
        setError("Failed to add user. Please try again.");
      }
    } catch (err: any) {
      console.error("Error adding user:", err);
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
      //reload the page
      window.location.reload();
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box sx={modalStyle}>
        <Typography id="modal-title" variant="h6" component="h2" mb={2}>
          Add New User
        </Typography>

        {loading ? (
          <Box className="flex justify-center items-center py-4">
            <CircularProgress />
          </Box>
        ) : (
          <>
            {error && (
              <Typography color="error" variant="body2" mb={2}>
                {error}
              </Typography>
            )}
            <div className="flex flex-col gap-4">
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Email (Username)"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Role"
                name="role"
                select
                value={formData.role}
                onChange={handleRoleChange}
                fullWidth
                required
              >
                {roles.map((role) => (
                  <MenuItem key={role.value} value={role.value}>
                    {role.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button onPress={onClose}>Cancel</Button>
              <Button color="primary" onPress={handleAddUser}>
                Add User
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default AddUserModal;
