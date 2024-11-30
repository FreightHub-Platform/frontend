"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts"; // Import the correct type

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const UserGrowthChart: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [userSeries, setUserSeries] = useState<any[]>([]);

  useEffect(() => {
    // Fetch users from localStorage
    const usersData = JSON.parse(localStorage.getItem("usersData") || "[]");

    // Define months for the X-axis
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    setCategories(months);

    // Initialize an array to hold user counts per month
    const userCounts = new Array(12).fill(0);

    usersData.forEach((user: any) => {
      // Mocking user creation date; replace `createdDate` with actual field
      const createdDate = user.createdDate
        ? new Date(user.createdDate)
        : new Date();
      const monthIndex = createdDate.getMonth(); // 0-indexed
      userCounts[monthIndex] += 1;
    });

    // Calculate cumulative user counts for the line chart
    const cumulativeUserCounts = userCounts.map((count, index) =>
      userCounts.slice(0, index + 1).reduce((a, b) => a + b, 0)
    );

    setUserSeries([
      {
        name: "Total Users",
        data: cumulativeUserCounts,
      },
    ]);
  }, []);

  // Define the chart options with the correct type
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Number of Users",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    markers: {
      size: 4,
    },
    legend: {
      position: "top", // Correct string literal value
    },
  };

  return (
    <div className="p-5 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">User Growth Overview</h2>
      <Chart
        options={chartOptions}
        series={userSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default UserGrowthChart;
