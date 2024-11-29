
const columns = [
  {name: "LICENSE PLATE NO", uid: "licenseNo", sortable: true},
  {name: "VEHICLE REGISTRATION", uid: "type", sortable: true},
  {name:"TYPE", uid: "type"},
  {name: "MAKE", uid: "make", sortable: true},
  {name: "MODEL", uid: "model", sortable: true},
  {name: "IS REFIDGERATED", uid: "refrigFlag", sortable: true},
  {name: "HAS CRANE", uid: "craneFlag", sortable: true},
  {name: "COLOR" , uid: "color", sortable: true},
  {name: "STATUS", uid: "verifyStatus"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "verified", uid: "verified"},
  {name: "Not Verified", uid: "Not Verified"},
];

const consigners = [
  {
    license_plate: "tharindra",
    reg_no: "kotarala",
    type: "200145699877",
    make: "0779996325",
    model: "283/D/F",
    is_refid: "Periyamulla Negombo",
    crane: "11500",
    year_manufac: "Negombo",
    color: "Gampaha",
    owner: "Gampaha",
    status: 'Verified',
  },
  {
    license_plate: "nikan",
    reg_no: "kotarala",
    type: "200145699877",
    make: "0779996325",
    model: "283/D/F",
    is_refid: "Periyamulla Negombo",
    crane: "11500",
    year_manufac: "Negombo",
    color: "Gampaha",
    owner: "Gampaha",
    status: 'Verified',
  },
  {
    license_plate: "amuthu",
    reg_no: "kotarala",
    type: "200145699877",
    make: "0779996325",
    model: "283/D/F",
    is_refid: "Periyamulla Negombo",
    crane: "11500",
    year_manufac: "Negombo",
    color: "Gampaha",
    owner: "Gampaha",
    status: 'Verified',
  }
];

export {columns, statusOptions};