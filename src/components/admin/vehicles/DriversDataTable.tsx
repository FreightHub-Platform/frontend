"use client";
import React from "react";

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
  Pagination,
  Selection,
  SortDescriptor,
} from "@nextui-org/react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  driverColumns,
  drivers,
  licenseTypes,
  employmentStatuses,
  preferredVehicleTypes,
} from "./Drivers";
import { capitalize } from "../dashboard/ordersTable/Utils";

const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "fullName",
  "dob",
  "licenseNumber",
  "licenseType",
  "licenseExpiry",
  "employmentStatus",
  "experience",
  "currentVehicleId",
  "preferredVehicleType",
  "availability",
  "actions",
];

type Driver = (typeof drivers)[0];

export default function DriversDataTable() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [licenseTypeFilter, setLicenseTypeFilter] =
    React.useState<Selection>("all");
  const [employmentStatusFilter, setEmploymentStatusFilter] =
    React.useState<Selection>("all");
  const [preferredVehicleTypeFilter, setPreferredVehicleTypeFilter] =
    React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "id",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return driverColumns;

    return driverColumns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredDrivers = [...drivers];

    if (hasSearchFilter) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        driver.fullName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (
      licenseTypeFilter !== "all" &&
      Array.from(licenseTypeFilter).length > 0
    ) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        Array.from(licenseTypeFilter).includes(driver.licenseType.toLowerCase())
      );
    }

    if (
      employmentStatusFilter !== "all" &&
      Array.from(employmentStatusFilter).length > 0
    ) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        Array.from(employmentStatusFilter).includes(
          driver.employmentStatus.toLowerCase()
        )
      );
    }

    if (
      preferredVehicleTypeFilter !== "all" &&
      Array.from(preferredVehicleTypeFilter).length > 0
    ) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        Array.from(preferredVehicleTypeFilter).includes(
          driver.preferredVehicleType.toLowerCase()
        )
      );
    }

    return filteredDrivers;
  }, [
    hasSearchFilter,
    licenseTypeFilter,
    employmentStatusFilter,
    preferredVehicleTypeFilter,
    filterValue,
  ]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Driver, b: Driver) => {
      const first = a[sortDescriptor.column as keyof Driver];
      const second = b[sortDescriptor.column as keyof Driver];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (driver: Driver, columnKey: React.Key) => {
      const cellValue = driver[columnKey as keyof Driver];

      switch (columnKey) {
        case "contactDetails":
          return `${driver.contactDetails.phone} / ${driver.contactDetails.email}`;
        case "certifications":
          return driver.certifications.join(", ");
        case "trainingRecords":
          return driver.trainingRecords.join(", ");
        case "performanceReviews":
          return driver.performanceReviews.join(", ");
        case "previousVehicles":
          return driver.previousVehicles.join(", ");
        case "medicalCertifications":
          return driver.medicalCertifications.join(", ");
        case "safetyTraining":
          return driver.safetyTraining.join(", ");
        case "actions":
          return (
            <div className="relative flex justify-center items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <MoreVertIcon className="text-default-300" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>View</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return typeof cellValue === "object"
            ? JSON.stringify(cellValue)
            : cellValue;
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
            placeholder="Search by Full Name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ExpandMoreIcon className="text-small" />}
                  variant="flat"
                >
                  License Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="License Type Filter"
                closeOnSelect={false}
                selectedKeys={licenseTypeFilter}
                selectionMode="multiple"
                onSelectionChange={setLicenseTypeFilter}
              >
                {licenseTypes.map((type) => (
                  <DropdownItem key={type.uid} className="capitalize">
                    {capitalize(type.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ExpandMoreIcon className="text-small" />}
                  variant="flat"
                >
                  Employment Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Employment Status Filter"
                closeOnSelect={false}
                selectedKeys={employmentStatusFilter}
                selectionMode="multiple"
                onSelectionChange={setEmploymentStatusFilter}
              >
                {employmentStatuses.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ExpandMoreIcon className="text-small" />}
                  variant="flat"
                >
                  Preferred Vehicle Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Preferred Vehicle Type Filter"
                closeOnSelect={false}
                selectedKeys={preferredVehicleTypeFilter}
                selectionMode="multiple"
                onSelectionChange={setPreferredVehicleTypeFilter}
              >
                {preferredVehicleTypes.map((type) => (
                  <DropdownItem key={type.uid} className="capitalize">
                    {capitalize(type.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
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
                {driverColumns.map((column) => (
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
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    onSearchChange,
    licenseTypeFilter,
    employmentStatusFilter,
    preferredVehicleTypeFilter,
    visibleColumns,
    onRowsPerPageChange,
    onClear,
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
  }, [
    selectedKeys,
    filteredItems.length,
    page,
    pages,
    onPreviousPage,
    onNextPage,
  ]);

  return (
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
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No drivers found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
