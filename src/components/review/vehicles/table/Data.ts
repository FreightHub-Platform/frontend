const columns = [
  { name: "LICENSE PLATE NO", uid: "licenseNo", sortable: true },
  { name: "MAKE", uid: "make", sortable: true },
  { name: "MODEL", uid: "model", sortable: true },
  { name: "COLOR", uid: "color", sortable: true },
  { name: "STATUS", uid: "verifyStatus" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "verified", uid: "verified" },
  { name: "rejected", uid: "rejected" },
];

export { columns, statusOptions };
