import React from "react";
const columns = [
  {name: "FIRST NAME", uid: "fname", sortable: true},
  {name: "LAST NAME", uid: "lname", sortable: true},
  {name:"NIC", uid: "nic"},
  {name: "EMAIL", uid: "username", sortable: true},
  {name: "ADDRESS 1", uid: "addressLine1", sortable: true},
  {name: "ADDRESS 2", uid: "addressLine2", sortable: true},
  {name: "PROVINCE" , uid: "province", sortable: true},
  {name: "STATUS", uid: "verifyStatus"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Verified", uid: "Verified"},
  {name: "Not Verified", uid: "Not Verified"},
];

// const consigners = [
//   {
//     first_name: "Sandaras",
//     last_name: "kotarala",
//     nic: "200145699877",
//     email: "0779996325",
//     add1: "283/D/F",
//     add2: "Periyamulla Negombo",
//     zip_code: "11500",
//     vehicle: "Negombo",
//     province: "Gampaha",
//     status: 'Not Verified',
//   },
//   {
//     first_name: "Geethika",
//     last_name: "nilame",
//     nic: "200132114566",
//     email: "0779996325",
//     add1: "283/D/F",
//     add2: "Periyamulla Negombo",
//     zip_code: "11500",
//     vehicle: "Negombo",
//     province: "Gampaha",
//     status: 'Verified',
//   },
//   {
//     first_name: "Tharindara",
//     last_name: "kumarihami",
//     nic: "200132884566",
//     email: "0779996325",
//     add1: "283/D/F",
//     add2: "Periyamulla Negombo",
//     zip_code: "11500",
//     vehicle: "Negombo",
//     province: "Gampaha",
//     status: 'Verified',
//   }
// ];

export {columns, statusOptions};