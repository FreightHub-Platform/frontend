import dynamic from 'next/dynamic';
import React from 'react';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface MyApexChartProps {
  data: {
    categories: string[];
    series: {
      name: string;
      data: number[];
    }[];
  };
}

const MyApexChart: React.FC<MyApexChartProps> = ({ data }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line', 
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: data.categories,
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="w-full p-5">
      <Chart options={chartOptions} series={data.series} type="line" height={400} />
    </div>
  );
};

export default MyApexChart;