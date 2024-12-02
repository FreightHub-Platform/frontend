"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Spinner,
} from "@nextui-org/react";

import { userApi } from "../../../utils/config";

type AddUserModalProps = {
  open: boolean;
  onClose: () => void;
  onUserAdded: () => void;
};

export default function AddUserModal({
  open,
  onClose,
  onUserAdded,
}: AddUserModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string | null>(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await userApi.post(
        "/create",
        {
          username,
          password,
          role,
          mobileNumber,
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      if (response.data.statusCode === 200) {
        onUserAdded();
        onClose();
      } else {
        setError(response.data.message || "Failed to create user.");
      }
    } catch (err: any) {
      console.error("Error creating user:", err);
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={open} onClose={onClose} className="w-full sm:max-w-lg">
      <ModalHeader>
        <h2 className="text-xl font-semibold">Add New User</h2>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <Input
            label="Username (Email)"
            placeholder="Enter email"
            type="email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Dropdown>
            <DropdownTrigger>
              <Button color="primary" variant="flat" fullWidth>
                {role ? `Role: ${role}` : "Select Role"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Roles"
              onAction={(key) => setRole(key.toString())}
              selectedKeys={role ? new Set([role]) : undefined}
              selectionMode="single"
            >
              <DropdownSection title="Roles">
                <DropdownItem key="admin">Admin</DropdownItem>
                <DropdownItem key="review_board">Review Board</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
          <Input
            label="Mobile Number"
            placeholder="Enter mobile number"
            type="text"
            required
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Input
            label="Full Name"
            placeholder="Enter full name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onPress={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          color="success"
          onPress={handleSubmit}
          isDisabled={!username || !password || !role || !mobileNumber || !name}
          isLoading={loading}
        >
          Add User
        </Button>
      </ModalFooter>
    </Modal>
  );
}
