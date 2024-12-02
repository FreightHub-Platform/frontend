"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Reports = () => {
  // Sample data for the table
  const data = [
    { year: 2023, month: "January" },
    { year: 2023, month: "February" },
    { year: 2024, month: "March" },
    { year: 2024, month: "April" },
    { year: 2024, month: "May" },
    { year: 2023, month: "January" },
    { year: 2023, month: "February" },
    { year: 2024, month: "March" },
    { year: 2024, month: "April" },
    { year: 2024, month: "May" },
    { year: 2023, month: "January" },
    { year: 2023, month: "February" },
    { year: 2024, month: "March" },
    { year: 2024, month: "April" },
    { year: 2024, month: "May" },
    { year: 2023, month: "January" },
    { year: 2023, month: "February" },
    { year: 2024, month: "March" },
    { year: 2024, month: "April" },
    { year: 2024, month: "May" },
    { year: 2023, month: "January" },
    { year: 2023, month: "February" },
    { year: 2024, month: "March" },
    { year: 2024, month: "April" },
    { year: 2024, month: "May" },
    { year: 2023, month: "January" },
    { year: 2023, month: "February" },
    { year: 2024, month: "March" },
    { year: 2024, month: "April" },
    { year: 2024, month: "May" },
  ];

  const [selectedYear, setSelectedYear] = useState("All");
  const router = useRouter()
  const pathName = usePathname()

  const handleNavigation = (id) => {
    router.push(`${pathName}/${id}`)
  }

  // Function to handle year filtering
  const handleFilterChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // Filtered data based on the selected year
  const filteredData =
    selectedYear === "All" ? data : data.filter((item) => item.year === parseInt(selectedYear));

  return (
    <div className="w-full mb-3 flex justify-center">
      <div className="bg-white p-5 w-11/12 rounded-2xl h-[588px]">
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="yearFilter" className="font-medium mr-2">
            Filter by Year:
          </label>
          <select
            id="yearFilter"
            value={selectedYear}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          >
            <option value="All">All</option>
            {[...new Set(data.map((item) => item.year))].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-y-scroll h-[480px] custom-scrollbar-horizontal">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="sticky top-0 bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Year</th>
                <th className="border border-gray-300 px-4 py-2">Month</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation(index)}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.year}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.month}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
