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

type DriverType = {
  id: number;
  username: string;
  availability: string;
  verifyStatus: string;
  contactNumber: string | null;
  fname: string | null;
  lname: string | null;
};

const columns = [
  { name: "Username", uid: "username", sortable: true },
  { name: "First Name", uid: "fname" },
  { name: "Last Name", uid: "lname" },
  { name: "Contact", uid: "contactNumber" },
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
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  available: "success",
  unavailable: "danger",
  verified: "success",
  rejected: "danger",
  pending: "warning",
};

const INITIAL_VISIBLE_COLUMNS = [
  "username",
  "fname",
  "lname",
  "contactNumber",
  "availability",
  "verifyStatus",
  "actions",
];

export default function DriverDetailsTabple() {
  const [drivers, setDrivers] = useState<DriverType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<string>("");
  const [availabilityFilter, setAvailabilityFilter] = useState<Selection>(
    new Set([])
  );
  const [verifyStatusFilter, setVerifyStatusFilter] = useState<Selection>(
    new Set([])
  );
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "username",
    direction: "ascending",
  });
  const [page, setPage] = useState<number>(1);

  // Function to fetch vehicles from API
  const fetchDrivers = async () => {
    try {
      setLoading(true);
      const jwtToken = localStorage.getItem("jwt");
      const response = await api.get("/driver/", {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });

      const driversData = response.data.data.map((driver: any) => ({
        id: driver.id,
        username: driver.username,
        availability: driver.availability,
        verifyStatus: driver.verifyStatus,
        contactNumber: driver.contactNumber,
        fname: driver.fname,
        lname: driver.lname,
      }));

      localStorage.setItem("driversData", JSON.stringify(driversData));
      setDrivers(driversData);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching drivers:", err);
      setError("Failed to load drivers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem("driversData");

    if (cachedData) {
      setDrivers(JSON.parse(cachedData));
      setLoading(false);

      // Fetch data from API in the background
    } else {
      // Fetch data from API
      fetchDrivers();
    }
  }, []);

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
    let filteredDrivers = [...drivers];

    // Search filter
    if (filterValue) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        Object.values(driver).some((value) =>
          value?.toString().toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    }

    // Availability filter
    if (availabilityFilter instanceof Set && availabilityFilter.size > 0) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        (availabilityFilter as Set<string>).has(driver.availability)
      );
    }

    // Verify Status filter
    if (verifyStatusFilter instanceof Set && verifyStatusFilter.size > 0) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        (verifyStatusFilter as Set<string>).has(driver.verifyStatus)
      );
    }

    return filteredDrivers;
  }, [drivers, filterValue, availabilityFilter, verifyStatusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a: DriverType, b: DriverType) => {
      const first = a[sortDescriptor.column as keyof DriverType];
      const second = b[sortDescriptor.column as keyof DriverType];

      if (typeof first === "string" && typeof second === "string") {
        return sortDescriptor.direction === "descending"
          ? second.localeCompare(first)
          : first.localeCompare(second);
      } else {
        return 0;
      }
    });
  }, [sortDescriptor, filteredItems]);

  const renderCell = React.useCallback(
    (driver: DriverType, columnKey: React.Key) => {
      const cellValue = driver[columnKey as keyof DriverType];

      switch (columnKey) {
        case "availability":
        case "verifyStatus":
          return (
            <Chip
              size="sm"
              variant="flat"
              color={
                statusColorMap[
                  typeof cellValue === "string"
                    ? cellValue.toLowerCase()
                    : ("" as keyof typeof statusColorMap)
                ]
              }
            >
              {capitalize(String(cellValue))}
            </Chip>
          );

        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Button size="sm" variant="flat" color="primary">
                View
              </Button>
              <Button size="sm" variant="flat" color="danger">
                Delete
              </Button>
            </div>
          );

        default:
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                {String(cellValue)}
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
            Total {drivers.length} drivers
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
    drivers.length,
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
    </>
  );
}
