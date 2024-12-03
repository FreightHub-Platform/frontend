"use client";

import React, { Component } from "react";
import dynamic from "next/dynamic";

// Dynamically import Chart component to ensure client-side rendering
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface LineChartState {
  options: any;
  series: { name: string; data: number[] }[];
}

class OrderVolumeByTime extends Component<{}, LineChartState> {
  constructor(props: {}) {
    super(props);

    // Initialize state with default chart configuration and empty data
    this.state = {
      options: {
        chart: {
          type: "line",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [], // Time periods (e.g., days, weeks, months)
          title: {
            text: "Time Period",
          },
        },
        yaxis: {
          title: {
            text: "Order Volume",
          },
        },
        colors: ["#007bff"], // Blue color for the line
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "",
          align: "center",
        },
      },
      series: [
        {
          name: "Orders",
          data: [], // Order volume data for each time period
        },
      ],
    };
  }

  componentDidMount() {
    // Fetch data from localStorage after component mounts
    const ordersData: Array<{ pickupDate: string }> = JSON.parse(
      localStorage.getItem("ordersData") || "[]"
    );

    // Group data by the default timeframe (e.g., daily)
    const groupedData = this.groupOrdersByTimeframe(ordersData, "daily");

    // Update state with the processed data
    this.setState({
      options: {
        ...this.state.options,
        xaxis: {
          ...this.state.options.xaxis,
          categories: groupedData.labels, // Time periods
        },
      },
      series: [
        {
          name: "Orders",
          data: groupedData.series, // Order counts
        },
      ],
    });
  }

  groupOrdersByTimeframe = (
    orders: Array<{ pickupDate: string }>,
    timeframe: "daily" | "weekly" | "monthly"
  ) => {
    // Format the date based on the selected timeframe
    const dateFormatter = (date: Date) => {
      if (timeframe === "daily") return date.toISOString().split("T")[0]; // YYYY-MM-DD
      if (timeframe === "weekly") {
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay()); // Start of the week
        return weekStart.toISOString().split("T")[0];
      }
      if (timeframe === "monthly") return date.toISOString().slice(0, 7); // YYYY-MM
    };

    // Count orders grouped by the formatted date
    const counts: Record<string, number> = {};
    orders.forEach((order) => {
      const orderDate = new Date(order.pickupDate);
      const key = dateFormatter(orderDate);
      counts[key] = (counts[key] || 0) + 1;
    });

    const labels = Object.keys(counts).sort(); // Sorted time periods
    const series = labels.map((label) => counts[label]);

    return { labels, series };
  };

  render() {
    return (
      <div className="line-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="350"
        />
      </div>
    );
  }
}

export default OrderVolumeByTime;
