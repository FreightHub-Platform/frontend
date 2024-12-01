"use client";
import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SingleStackedBarChartProps {
  available: number;
  unavailable: number;
}

const SingleStackedBarChart: React.FC<SingleStackedBarChartProps> = ({
  available,
  unavailable,
}) => {
  const data = [
    {
      name: "Available",
      data: [available],
    },
    {
      name: "Unavailable",
      data: [unavailable],
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 100,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
      },
    },
    xaxis: {
      categories: ["Vehicles"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " vehicles";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: 40,
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) =>
        `${opts.w.globals.seriesPercent[opts.seriesIndex][0].toFixed(1)}%`,
      offsetX: 0,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
  };

  return (
    <div className="w-full">
      <Chart options={chartOptions} series={data} type="bar" height={100} />
    </div>
  );
};

export default SingleStackedBarChart;
