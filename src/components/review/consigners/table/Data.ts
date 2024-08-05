import React from "react";
const columns = [
  {name: "NAME", uid: "name", sortable: true},
  {name: "REGISTRATION NUMBER", uid: "id", sortable: true},
  {name:"MAIN CONTACT", uid: "main"},
  {name: "ALTERNATIVE CONTACT", uid: "alter", sortable: true},
  {name: "ADDRESS 1", uid: "add1", sortable: true},
  {name: "ADDRESS 2", uid: "add2", sortable: true},
  {name: "POSTAL CODE", uid: "postal", sortable: true},
  {name: "CITY" , uid: "city", sortable: true},
  {name: "PROVINCE", uid: "province"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Verified", uid: "Verified"},
  {name: "Not Verified", uid: "Not Verified"},
];

const consigners = [
  {
    name: "Advantis",
    id: 23,
    main: "0775006920",
    alter: "0779996325",
    add1: "283/D/F",
    add2: "Periyamulla Negombo",
    postal: "11500",
    city: "Negombo",
    province: "Gampaha",
    status: 'Verified',
  },
  {
    name: "Advantis",
    id: 12,
    main: "0775006920",
    alter: "0779996325",
    add1: "283/D/F",
    add2: "Periyamulla Negombo",
    postal: "11500",
    city: "Negombo",
    province: "Gampaha",
    status: 'Not Verified',
  },
  {
    name: "Advantis",
    id: 24,
    main: "0775006920",
    alter: "0779996325",
    add1: "283/D/F",
    add2: "Periyamulla Negombo",
    postal: "11500",
    city: "Negombo",
    province: "Gampaha",
    status: 'Not Verified',
  },
  {
    name: "Advantis",
    id: 65,
    main: "0775006920",
    alter: "0779996325",
    add1: "283/D/F",
    add2: "Periyamulla Negombo",
    postal: "11500",
    city: "Negombo",
    province: "Gampaha",
    status: 'Not Verified',
  },
  {
    name: "Advantis",
    id: 79,
    main: "0775006920",
    alter: "0779996325",
    add1: "283/D/F",
    add2: "Periyamulla Negombo",
    postal: "11500",
    city: "Negombo",
    province: "Gampaha",
    status: 'Verified',
  },
  {
    name: "Advantis",
    id: 75,
    main: "0775006920",
    alter: "0779996325",
    add1: "283/D/F",
    add2: "Periyamulla Negombo",
    postal: "11500",
    city: "Negombo",
    province: "Gampaha",
    status: 'Verified',
  },
  
];

export {columns, consigners, statusOptions};