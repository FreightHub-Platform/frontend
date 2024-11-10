import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "USER", uid: "userName", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "Role", uid: "role", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "Active" },
  { name: "Pending", uid: "Pending" },
  { name: "Inactive", uid: "Inactive" },
];

const users = [
  {
    id: 1,
    userName: "Danujaya Liyanage",
    email: "Danujaya@gmail.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 2,
    userName: "Aanujaya Liyanage",
    email: "Aanujaya@gmail.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    userName: "Sanujaya Liyanage",
    email: "Sanujaya@gmail.com",
    role: "Driver",
    status: "Active",
  },
  {
    id: 4,
    userName: "Fanujaya Liyanage",
    email: "Fanujaya@gmail.com",
    role: "Admin",
    status: "Pending",
  },
];

export { columns, users, statusOptions };
