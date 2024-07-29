// VehicleData.ts
export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "VEHICLE", uid: "vehicle", sortable: true },
  { name: "TYPE", uid: "type", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "IMAGE", uid: "image" },
  { name: "DRIVER", uid: "driver", sortable: true },
  { name: "ASSIGNED", uid: "assigned", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "MAX WEIGHT", uid: "maxWeight", sortable: true },
  { name: "MAX SIZE", uid: "maxSize", sortable: true },
  { name: "LAST MAINTENANCE", uid: "maintenance", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Inactive", uid: "inactive" },
  { name: "Maintenance", uid: "maintenance" },
];

export const driverOptions = [
  { name: "Amal Perera", uid: "amal_perera" },
  { name: "Sunil Perera", uid: "sunil_perera" },
  { name: "Kamal Perera", uid: "kamal_perera" },
  { name: "Nimal Perera", uid: "nimal_perera" },
  { name: "Ajith Silva", uid: "ajith_silva" },
  { name: "Chathura Jayasinghe", uid: "chathura_jayasinghe" },
  { name: "Nihal Fernando", uid: "nihal_fernando" },
  { name: "Mahesh Perera", uid: "mahesh_perera" },
  { name: "Ruwan Liyanage", uid: "ruwan_liyanage" },
  { name: "Saman Gunawardena", uid: "saman_gunawardena" },
];

export const assignedOptions = [
  { name: "Yes", uid: "yes" },
  { name: "No", uid: "no" },
];

export const vehicleTypes = [
  { name: "Heavy Goods Vehicle (HGV)", uid: "hgv" },
  { name: "Light Commercial Vehicle (LCV)", uid: "lcv" },
  { name: "Specialized Vehicle", uid: "sv" },
  { name: "Intermodal Vehicle", uid: "iv" },
  { name: "Passenger Vehicle for Freight", uid: "pvf" },
];

export const vehicleCategories = [
  { name: "Articulated Lorries", uid: "al" },
  { name: "Rigid Trucks", uid: "rt" },
  { name: "Tankers", uid: "t" },
  { name: "Flatbed Trucks", uid: "ft" },
  { name: "Delivery Vans", uid: "dv" },
  { name: "Pickup Trucks", uid: "pt" },
  { name: "Refrigerated Trucks", uid: "rf" },
  { name: "Car Carriers", uid: "cc" },
  { name: "Hazardous Material Transporters", uid: "hm" },
  { name: "Container Trucks", uid: "ct" },
  { name: "Flat Racks", uid: "fr" },
  { name: "Minibuses for Light Goods", uid: "mlg" },
];

export const vehicles = [
  {
    id: 1,
    vehicle: "Scania R Series",
    type: "hgv",
    category: "al",
    image: "https://via.placeholder.com/150",
    driver: "Amal Perera",
    assigned: "Yes",
    status: "Active",
    maxWeight: "20 tons",
    maxSize: "40 cubic meters",
    maintenance: "2024-01-01",
  },
  {
    id: 2,
    vehicle: "Volvo FH Series",
    type: "hgv",
    category: "rt",
    image: "https://via.placeholder.com/150",
    driver: "Sunil Perera",
    assigned: "No",
    status: "Active",
    maxWeight: "18 tons",
    maxSize: "35 cubic meters",
    maintenance: "2024-02-15",
  },
  {
    id: 3,
    vehicle: "MAN TGX",
    type: "hgv",
    category: "t",
    image: "https://via.placeholder.com/150",
    driver: "Kamal Perera",
    assigned: "Yes",
    status: "Inactive",
    maxWeight: "22 tons",
    maxSize: "45 cubic meters",
    maintenance: "2024-03-20",
  },
  {
    id: 4,
    vehicle: "Mercedes-Benz Actros",
    type: "hgv",
    category: "ft",
    image: "https://via.placeholder.com/150",
    driver: "Nimal Perera",
    assigned: "No",
    status: "Maintenance",
    maxWeight: "24 tons",
    maxSize: "50 cubic meters",
    maintenance: "2024-04-10",
  },
  {
    id: 5,
    vehicle: "Ford Transit",
    type: "lcv",
    category: "dv",
    image: "https://via.placeholder.com/150",
    driver: "Sunil Perera",
    assigned: "Yes",
    status: "Active",
    maxWeight: "2 tons",
    maxSize: "12 cubic meters",
    maintenance: "2024-05-12",
  },
  {
    id: 6,
    vehicle: "Mercedes-Benz Sprinter",
    type: "lcv",
    category: "dv",
    image: "https://via.placeholder.com/150",
    driver: "Ajith Silva",
    assigned: "No",
    status: "Inactive",
    maxWeight: "2.5 tons",
    maxSize: "13 cubic meters",
    maintenance: "2024-06-01",
  },
  {
    id: 7,
    vehicle: "Volkswagen Crafter",
    type: "lcv",
    category: "pt",
    image: "https://via.placeholder.com/150",
    driver: "Chathura Jayasinghe",
    assigned: "Yes",
    status: "Maintenance",
    maxWeight: "3 tons",
    maxSize: "14 cubic meters",
    maintenance: "2024-07-01",
  },
  {
    id: 8,
    vehicle: "Toyota Hilux",
    type: "lcv",
    category: "pt",
    image: "https://via.placeholder.com/150",
    driver: "Nihal Fernando",
    assigned: "No",
    status: "Active",
    maxWeight: "3.5 tons",
    maxSize: "15 cubic meters",
    maintenance: "2024-08-01",
  },
  {
    id: 9,
    vehicle: "Iveco Eurocargo",
    type: "sv",
    category: "rf",
    image: "https://via.placeholder.com/150",
    driver: "Mahesh Perera",
    assigned: "Yes",
    status: "Inactive",
    maxWeight: "4 tons",
    maxSize: "16 cubic meters",
    maintenance: "2024-09-01",
  },
  {
    id: 10,
    vehicle: "Renault Trucks D",
    type: "sv",
    category: "cc",
    image: "https://via.placeholder.com/150",
    driver: "Ruwan Liyanage",
    assigned: "No",
    status: "Maintenance",
    maxWeight: "5 tons",
    maxSize: "20 cubic meters",
    maintenance: "2024-10-01",
  },
  {
    id: 11,
    vehicle: "DAF CF",
    type: "sv",
    category: "hm",
    image: "https://via.placeholder.com/150",
    driver: "Saman Gunawardena",
    assigned: "Yes",
    status: "Active",
    maxWeight: "6 tons",
    maxSize: "25 cubic meters",
    maintenance: "2024-11-01",
  },
  {
    id: 12,
    vehicle: "Mack Anthem",
    type: "iv",
    category: "ct",
    image: "https://via.placeholder.com/150",
    driver: "Kasun Rathnayake",
    assigned: "No",
    status: "Inactive",
    maxWeight: "16 tons",
    maxSize: "40 cubic meters",
    maintenance: "2024-12-01",
  },
  {
    id: 13,
    vehicle: "Kenworth T680",
    type: "iv",
    category: "fr",
    image: "https://via.placeholder.com/150",
    driver: "Nuwan Wijesinghe",
    assigned: "Yes",
    status: "Maintenance",
    maxWeight: "18 tons",
    maxSize: "45 cubic meters",
    maintenance: "2025-01-01",
  },
  {
    id: 14,
    vehicle: "Ford Transit Custom",
    type: "pvf",
    category: "mlg",
    image: "https://via.placeholder.com/150",
    driver: "Prasanna De Silva",
    assigned: "No",
    status: "Active",
    maxWeight: "1 ton",
    maxSize: "8 cubic meters",
    maintenance: "2025-02-01",
  },
  {
    id: 15,
    vehicle: "Mercedes-Benz Vito",
    type: "pvf",
    category: "mlg",
    image: "https://via.placeholder.com/150",
    driver: "Chaminda Rajapaksha",
    assigned: "Yes",
    status: "Inactive",
    maxWeight: "1.5 tons",
    maxSize: "10 cubic meters",
    maintenance: "2025-03-01",
  },
  {
    id: 16,
    vehicle: "Scania R Series",
    type: "hgv",
    category: "al",
    image: "https://via.placeholder.com/150",
    driver: "Heshan Fernando",
    assigned: "No",
    status: "Maintenance",
    maxWeight: "20 tons",
    maxSize: "40 cubic meters",
    maintenance: "2025-04-01",
  },
  {
    id: 17,
    vehicle: "Volvo FH Series",
    type: "hgv",
    category: "rt",
    image: "https://via.placeholder.com/150",
    driver: "Lakshan Jayawardena",
    assigned: "Yes",
    status: "Active",
    maxWeight: "18 tons",
    maxSize: "35 cubic meters",
    maintenance: "2025-05-01",
  },
  {
    id: 18,
    vehicle: "MAN TGX",
    type: "hgv",
    category: "t",
    image: "https://via.placeholder.com/150",
    driver: "Upul Herath",
    assigned: "No",
    status: "Inactive",
    maxWeight: "22 tons",
    maxSize: "45 cubic meters",
    maintenance: "2025-06-01",
  },
  {
    id: 19,
    vehicle: "Mercedes-Benz Actros",
    type: "hgv",
    category: "ft",
    image: "https://via.placeholder.com/150",
    driver: "Chandana Perera",
    assigned: "Yes",
    status: "Maintenance",
    maxWeight: "24 tons",
    maxSize: "50 cubic meters",
    maintenance: "2025-07-01",
  },
  {
    id: 20,
    vehicle: "Ford Transit",
    type: "lcv",
    category: "dv",
    image: "https://via.placeholder.com/150",
    driver: "Roshan Silva",
    assigned: "No",
    status: "Active",
    maxWeight: "2 tons",
    maxSize: "12 cubic meters",
    maintenance: "2025-08-01",
  },
  {
    id: 21,
    vehicle: "Mercedes-Benz Sprinter",
    type: "lcv",
    category: "dv",
    image: "https://via.placeholder.com/150",
    driver: "Sujeewa Rathnayake",
    assigned: "Yes",
    status: "Inactive",
    maxWeight: "2.5 tons",
    maxSize: "13 cubic meters",
    maintenance: "2025-09-01",
  },
  {
    id: 22,
    vehicle: "Volkswagen Crafter",
    type: "lcv",
    category: "pt",
    image: "https://via.placeholder.com/150",
    driver: "Dinesh Perera",
    assigned: "No",
    status: "Maintenance",
    maxWeight: "3 tons",
    maxSize: "14 cubic meters",
    maintenance: "2025-10-01",
  },
  {
    id: 23,
    vehicle: "Toyota Hilux",
    type: "lcv",
    category: "pt",
    image: "https://via.placeholder.com/150",
    driver: "Suren Jayasinghe",
    assigned: "Yes",
    status: "Active",
    maxWeight: "3.5 tons",
    maxSize: "15 cubic meters",
    maintenance: "2025-11-01",
  },
  {
    id: 24,
    vehicle: "Iveco Eurocargo",
    type: "sv",
    category: "rf",
    image: "https://via.placeholder.com/150",
    driver: "Nuwan Perera",
    assigned: "No",
    status: "Inactive",
    maxWeight: "4 tons",
    maxSize: "16 cubic meters",
    maintenance: "2025-12-01",
  },
  {
    id: 25,
    vehicle: "Renault Trucks D",
    type: "sv",
    category: "cc",
    image: "https://via.placeholder.com/150",
    driver: "Chathura Silva",
    assigned: "Yes",
    status: "Maintenance",
    maxWeight: "5 tons",
    maxSize: "20 cubic meters",
    maintenance: "2026-01-01",
  },
  {
    id: 26,
    vehicle: "DAF CF",
    type: "sv",
    category: "hm",
    image: "https://via.placeholder.com/150",
    driver: "Pradeep Kumar",
    assigned: "No",
    status: "Active",
    maxWeight: "6 tons",
    maxSize: "25 cubic meters",
    maintenance: "2026-02-01",
  },
  {
    id: 27,
    vehicle: "Mack Anthem",
    type: "iv",
    category: "ct",
    image: "https://via.placeholder.com/150",
    driver: "Ranjan Silva",
    assigned: "Yes",
    status: "Inactive",
    maxWeight: "16 tons",
    maxSize: "40 cubic meters",
    maintenance: "2026-03-01",
  },
  {
    id: 28,
    vehicle: "Kenworth T680",
    type: "iv",
    category: "fr",
    image: "https://via.placeholder.com/150",
    driver: "Nishantha Perera",
    assigned: "No",
    status: "Maintenance",
    maxWeight: "18 tons",
    maxSize: "45 cubic meters",
    maintenance: "2026-04-01",
  },
  {
    id: 29,
    vehicle: "Ford Transit Custom",
    type: "pvf",
    category: "mlg",
    image: "https://via.placeholder.com/150",
    driver: "Dilshan Wickramasinghe",
    assigned: "Yes",
    status: "Active",
    maxWeight: "1 ton",
    maxSize: "8 cubic meters",
    maintenance: "2026-05-01",
  },
  {
    id: 30,
    vehicle: "Mercedes-Benz Vito",
    type: "pvf",
    category: "mlg",
    image: "https://via.placeholder.com/150",
    driver: "Sujeewa Rathnayake",
    assigned: "No",
    status: "Inactive",
    maxWeight: "1.5 tons",
    maxSize: "10 cubic meters",
    maintenance: "2026-06-01",
  },
];