import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Customer A', jobs: 30 },
  { name: 'Customer B', jobs: 45 },
  { name: 'Customer C', jobs: 20 },
];

const MostValuableCustomersChart = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Most Valuable Customers</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="jobs" fill="#FF4500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MostValuableCustomersChart;
