// "use client";

// import React, { Component } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import Chart component to ensure it only runs on the client side
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// interface DonutState {
//   options: any;
//   series: number[];
// }

// class OrderStatusDistribution extends Component<{}, DonutState> {
//   constructor(props: {}) {
//     super(props);

//     // Fetch data from local storage
//     const ordersData: Array<{ status: string }> = JSON.parse(
//       localStorage.getItem("ordersData") || "[]"
//     );

//     // Calculate counts for each status
//     const statusCounts = ordersData.reduce(
//       (acc: { [key: string]: number }, order: { status: string }) => {
//         acc[order.status] = (acc[order.status] || 0) + 1; // Ensure counts are numbers
//         return acc;
//       },
//       { created: 0, ongoing: 0, pending: 0, completed: 0 }
//     );

//     // Calculate total orders
//     const totalOrders: number = Object.values(statusCounts).reduce(
//       (sum, val) => sum + val,
//       0
//     );

//     // Prepare data for the pie chart
//     const series = [
//       statusCounts.created,
//       statusCounts.ongoing,
//       statusCounts.pending,
//       statusCounts.completed,
//     ];

//     this.state = {
//       options: {
//         chart: {
//           type: "donut",
//         },
//         labels: ["Created", "Ongoing", "Pending", "Completed"],
//         legend: {
//           position: "bottom",
//           formatter: function (label: string, opts: any) {
//             const value = opts.w.globals.series[opts.seriesIndex] as number;
//             const percentage = ((value / totalOrders) * 100).toFixed(1);
//             return `${label}: ${value} (${percentage}%)`;
//           },
//         },
//         dataLabels: {
//           enabled: true,
//           formatter: function (val: number, opts: any) {
//             return `${val.toFixed(1)}%`;
//           },
//         },
//         plotOptions: {
//           pie: {
//             donut: {
//               labels: {
//                 show: true,
//                 total: {
//                   show: true,
//                   label: "Total",
//                   formatter: () => `${totalOrders}`,
//                 },
//               },
//             },
//           },
//         },
//         colors: ["#ffa600", "#ff8c00", "#ff7300", "#ff5a00"], // Shades of orange
//       },
//       series, // Dynamic data from localStorage
//     };
//   }

//   render() {
//     return (
//       <div className="donut">
//         <Chart
//           options={this.state.options}
//           series={this.state.series}
//           type="donut"
//           width="380"
//         />
//       </div>
//     );
//   }
// }

// export default OrderStatusDistribution;

// methana build issue ekak awa eka nisa mn poddak wenas kala case dan balaam

"use client";

import React, { Component } from "react";
import dynamic from "next/dynamic";

// Dynamically import Chart component to ensure it only runs on the client side
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface DonutState {
  options: any;
  series: number[];
}

class OrderStatusDistribution extends Component<{}, DonutState> {
  constructor(props: {}) {
    super(props);

    // Initialize state with default values
    this.state = {
      options: {
        chart: {
          type: "donut",
        },
        labels: ["Created", "Ongoing", "Pending", "Completed"],
        legend: {
          position: "bottom",
          formatter: (label: string, opts: any) => {
            const value = opts.w.globals.series[opts.seriesIndex] as number;
            const totalOrders = this.state.series.reduce(
              (sum, val) => sum + val,
              0
            );
            const percentage = totalOrders
              ? ((value / totalOrders) * 100).toFixed(1)
              : "0.0";
            return `${label}: ${value} (${percentage}%)`;
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val: number) => `${val.toFixed(1)}%`,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "Total",
                  formatter: () =>
                    `${this.state.series.reduce((sum, val) => sum + val, 0)}`,
                },
              },
            },
          },
        },
        colors: ["#ffa600", "#ff8c00", "#ff7300", "#ff5a00"], // Shades of orange
      },
      series: [0, 0, 0, 0], // Default empty data
    };
  }

  componentDidMount() {
    // Fetch data from localStorage after the component has mounted
    const ordersData: Array<{ status: string }> = JSON.parse(
      localStorage.getItem("ordersData") || "[]"
    );

    // Calculate counts for each status
    const statusCounts = ordersData.reduce(
      (acc: { [key: string]: number }, order: { status: string }) => {
        acc[order.status] = (acc[order.status] || 0) + 1;
        return acc;
      },
      { created: 0, ongoing: 0, pending: 0, completed: 0 }
    );

    // Prepare data for the pie chart
    const series = [
      statusCounts.created,
      statusCounts.ongoing,
      statusCounts.pending,
      statusCounts.completed,
    ];

    // Update state with the fetched data
    this.setState({ series });
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default OrderStatusDistribution;
