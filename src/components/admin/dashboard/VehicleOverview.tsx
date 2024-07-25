'use client';
import React from "react";
import MyApexChart from "../../charts/MyApexChart";
const chartData = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 200, 300],
      },
      {
        name: 'Series 2',
        data: [20, 30, 25, 40, 39, 50, 60, 81, 115, 140, 190, 250],
      },
    ],  
}

const VehicleOverview: React.FC = () => {
    return (
        <MyApexChart data={chartData} />
    );
  };
  
  export default VehicleOverview;
  