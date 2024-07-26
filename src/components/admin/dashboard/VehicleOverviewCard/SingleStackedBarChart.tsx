'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SingleStackedBarChartProps {
  onTheWay: number;
  unloading: number;
  loading: number;
  waiting: number;
}

const SingleStackedBarChart: React.FC<SingleStackedBarChartProps> = ({
  onTheWay,
  unloading,
  loading,
  waiting,
}) => {
  const data = [
    {
      name: 'On the way',
      data: [onTheWay],
    },
    {
      name: 'Unloading',
      data: [unloading],
    },
    {
      name: 'Loading',
      data: [loading],
    },
    {
      name: 'Waiting',
      data: [waiting],
    },
  ];
  
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 100,
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '100%',
      },
    },
    xaxis: {
      categories: ['Time'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' hours';
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      offsetX: 40,
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => `${opts.w.globals.seriesPercent[opts.seriesIndex][0].toFixed(1)}%`,
      offsetX: 0,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
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
