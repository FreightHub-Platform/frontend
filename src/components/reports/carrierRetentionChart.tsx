import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', retentionRate: 85 },
  { month: 'Feb', retentionRate: 80 },
  { month: 'Mar', retentionRate: 82 },
];

const CarrierRetentionChart = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Carrier Retention Rate</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="retentionRate" stroke="#FF4500" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarrierRetentionChart;
