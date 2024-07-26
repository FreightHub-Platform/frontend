'use client';
import React, { Component } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Chart component to ensure it only runs on the client side
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DonutState {
  options: any;
  series: number[];
  labels: string[];
}

class DeliveryExceptions extends Component<{}, DonutState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'donut',
        },
        labels: ['Incorrect address', 'Weather conditions', 'Federal Holidays', 'Damage during transit'],
        legend: {
          position: 'bottom',
          formatter: function(label: string, opts: any) {
            return label + ": " + opts.w.globals.series[opts.seriesIndex];
          }
        },
        dataLabels: {
          enabled: true,
          // position:'bottom',
          formatter: function (val: number, opts: any) {
            return opts.w.config.series[opts.seriesIndex];
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Total'
                }
              }
            }
          }
        },
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B']
      },
      series: [13, 10, 8, 5],
      labels: ['Incorrect address', 'Weather conditions', 'Federal Holidays', 'Damage during transit']
    }
  }

  render() {
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default DeliveryExceptions;
