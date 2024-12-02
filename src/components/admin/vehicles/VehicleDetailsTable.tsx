"use client";
import React, { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Spinner,
} from "@nextui-org/react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { api } from "../../../utils/config";
import { capitalize } from "../../../utils/functions/functions";
import VehicleDetailsModal from "./VehicleDetailsModal";

type VehicleType = {
  id: number;
  licenseNo: string;
  model: string;
  make: string;
  year: string;
  color: string;
  craneFlag: boolean;
  refrigFlag: boolean;
  availability: string;
  verifyStatus: string;
};
const columns = [
  { name: "License No", uid: "licenseNo", sortable: true },
  { name: "Model", uid: "model", sortable: true },
  { name: "Make", uid: "make", sortable: true },
  { name: "Year", uid: "year", sortable: true },
  { name: "Color", uid: "color" },
  { name: "Crane", uid: "craneFlag" },
  { name: "Refrigeration", uid: "refrigFlag" },
  { name: "Availability", uid: "availability", sortable: true },
  { name: "Verify Status", uid: "verifyStatus", sortable: true },
  { name: "Actions", uid: "actions" },
];

const availabilityStatusOptions = [
  { name: "Available", uid: "available" },
  { name: "Unavailable", uid: "unavailable" },
];

const verifyStatusOptions = [
  { name: "Verified", uid: "verified" },
  { name: "Rejected", uid: "rejected" },
  { name: "Pending", uid: "pending" },
  { name: "Deleted", uid: "deleted" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  pending: "warning",
  inactive: "danger",
  available: "success",
  unavailable: "danger",
  verified: "success",
  rejected: "danger",
  yes: "success",
  no: "default",
};

const INITIAL_VISIBLE_COLUMNS = [
  "licenseNo",
  "model",
  "make",
  "year",
  "color",
  "craneFlag",
  "refrigFlag",
  "availability",
  "verifyStatus",
  "actions",
];

export default function VehicleDetailsTable() {
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewVehicleDetails = (vehicleId: number) => {
    setSelectedVehicleId(vehicleId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVehicleId(null);
  };

  // Function to fetch vehicles from API
  const fetchVehiclesFromAPI = async () => {
    try {
      setLoading(true);
      const jwtToken = localStorage.getItem("jwt");
      const response = await api.get("/vehicle/", {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });

      const vehiclesData = response.data.data.map((vehicle: any) => ({
        id: vehicle.id,
        licenseNo: vehicle.licenseNo,
        model: vehicle.model,
        make: vehicle.make,
        year: vehicle.year.trim(),
        color: vehicle.color.trim(),
        craneFlag: vehicle.craneFlag ? "Yes" : "No",
        refrigFlag: vehicle.refrigFlag ? "Yes" : "No",
        availability: vehicle.availability,
        verifyStatus: vehicle.verifyStatus,
      }));

      localStorage.setItem("vehiclesData", JSON.stringify(vehiclesData));

      setVehicles(vehiclesData);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching vehicles:", err);
      setError("Failed to load vehicles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Initialize component
  useEffect(() => {
    const cachedData = localStorage.getItem("vehiclesData");

    if (cachedData) {
      // Use cached data if available
      setVehicles(JSON.parse(cachedData));
      setLoading(false);

      // Refresh data in the background
      fetchVehiclesFromAPI();
    } else {
      // Fetch data if no cached data exists
      fetchVehiclesFromAPI();
    }
  }, []);

  const reloadPage = () => {
    // Clear cache and reload page
    localStorage.removeItem("vehiclesData");
    window.location.reload();
  };

  const [availabilityFilter, setAvailabilityFilter] =
    useState<Selection>("all");
  const [verifyStatusFilter, setVerifyStatusFilter] =
    useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "licenseNo",
    direction: "ascending",
  });
  const [page, setPage] = useState<number>(1);

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredVehicles = [...vehicles];

    if (filterValue) {
      filteredVehicles = filteredVehicles.filter((vehicle) =>
        Object.values(vehicle).some((value) =>
          value?.toString().toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    }

    if (
      availabilityFilter !== "all" &&
      Array.from(availabilityFilter).length !== availabilityStatusOptions.length
    ) {
      filteredVehicles = filteredVehicles.filter((vehicle) =>
        Array.from(availabilityFilter).includes(vehicle.availability)
      );
    }

    if (
      verifyStatusFilter !== "all" &&
      Array.from(verifyStatusFilter).length !== verifyStatusOptions.length
    ) {
      filteredVehicles = filteredVehicles.filter((vehicle) =>
        Array.from(verifyStatusFilter).includes(vehicle.verifyStatus)
      );
    }

    return filteredVehicles;
  }, [vehicles, filterValue, availabilityFilter, verifyStatusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: VehicleType, b: VehicleType) => {
      const first = a[sortDescriptor.column as keyof VehicleType];
      const second = b[sortDescriptor.column as keyof VehicleType];

      if (typeof first === "string" && typeof second === "string") {
        return sortDescriptor.direction === "descending"
          ? second.localeCompare(first)
          : first.localeCompare(second);
      } else {
        return sortDescriptor.direction === "descending"
          ? (second as number) - (first as number)
          : (first as number) - (second as number);
      }
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (vehicle: VehicleType, columnKey: React.Key) => {
      const cellValue = vehicle[columnKey as keyof VehicleType];

      switch (columnKey) {
        case "craneFlag":
        case "refrigFlag":
          return (
            <Chip
              size="sm"
              variant="flat"
              color={
                statusColorMap[
                  cellValue
                    .toString()
                    .toLowerCase() as keyof typeof statusColorMap
                ]
              }
            >
              {cellValue}
            </Chip>
          );
        case "availability":
        case "verifyStatus":
          return (
            <Chip
              size="sm"
              variant="flat"
              color={statusColorMap[cellValue as keyof typeof statusColorMap]}
            >
              {typeof cellValue === "string"
                ? capitalize(cellValue)
                : String(cellValue)}
            </Chip>
          );

        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Button
                size="sm"
                variant="flat"
                color="primary"
                onPress={() => handleViewVehicleDetails(vehicle.id)}
              >
                View
              </Button>

              <Button
                size="sm"
                variant="flat"
                color="danger"
                isDisabled={vehicle.verifyStatus === "deleted"}
                className={
                  vehicle.verifyStatus === "deleted" ? "text-gray-400" : ""
                }
                onPress={async () => {
                  const confirmed = window.confirm(
                    "Are you sure you want to delete this vehicle?"
                  );
                  if (confirmed) {
                    try {
                      const jwtToken = localStorage.getItem("jwt");
                      await api.post(
                        "/vehicle/delete",
                        { id: vehicle.id },
                        {
                          headers: { Authorization: `Bearer ${jwtToken}` },
                        }
                      );
                      fetchVehiclesFromAPI();
                    } catch (err) {
                      console.error("Error deleting vehicle:", err);
                    }
                  }
                }}
              >
                Delete
              </Button>
            </div>
          );

        default:
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                {typeof cellValue === "string"
                  ? capitalize(cellValue)
                  : String(cellValue)}
              </p>
            </div>
          );
      }
    },
    []
  );

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by Vehicle..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <div className="flex gap-3">
              {/* Availability Filter */}
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    endContent={<ExpandMoreIcon className="text-small" />}
                    variant="flat"
                  >
                    Availability
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Availability Filter"
                  closeOnSelect={false}
                  selectedKeys={availabilityFilter}
                  selectionMode="multiple"
                  onSelectionChange={(selection) => {
                    // Directly update the selection state
                    setAvailabilityFilter(selection);
                  }}
                >
                  {availabilityStatusOptions.map((status) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {capitalize(status.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              {/* Verify Status Filter */}
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    endContent={<ExpandMoreIcon className="text-small" />}
                    variant="flat"
                  >
                    Verify Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Verify Status Filter"
                  closeOnSelect={false}
                  selectedKeys={verifyStatusFilter}
                  selectionMode="multiple"
                  onSelectionChange={(selection) => {
                    // Directly update the selection state
                    setVerifyStatusFilter(selection);
                  }}
                >
                  {verifyStatusOptions.map((status) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {capitalize(status.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>

            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ExpandLessIcon className="text-small" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {vehicles.length} vehicles
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15" selected>
                15
              </option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    vehicles.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "",
        }}
        selectedKeys={selectedKeys}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "end" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={
            loading ? (
              <div className="flex justify-center items-center">
                <Spinner size="lg" />
              </div>
            ) : error ? (
              <div className="flex justify-center items-center text-danger">
                {error}
              </div>
            ) : (
              "No vehicles found"
            )
          }
          items={sortedItems}
        >
          {items.map((item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <VehicleDetailsModal
        vehicleId={selectedVehicleId}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
