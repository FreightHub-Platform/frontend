const columns = [
  { name: "LICENSE PLATE NO", uid: "licenseNo", sortable: true },
  { name: "VEHICLE TYPE", uid: "vtypeId", sortable: true },
  { name: "MAKE", uid: "make", sortable: true },
  { name: "MODEL", uid: "model", sortable: true },
  { name: "IS REFRIGERATED", uid: "refrigFlag", sortable: true },
  { name: "HAS CRANE", uid: "craneFlag", sortable: true },
  { name: "COLOR", uid: "color", sortable: true },
  { name: "STATUS", uid: "verifyStatus" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "verified", uid: "verified" },
  { name: "rejected", uid: "rejected" },
];

export { columns, statusOptions };
