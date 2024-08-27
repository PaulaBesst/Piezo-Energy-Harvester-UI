import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, CartesianAxis
} from 'recharts';

const Chart = ({ data = [], batteryVoltageData = [] }) => {
  // Combine data with batteryVoltageData and ensure timestamps are used
  const combinedData = data.map((item, index) => ({
    ...item,
    batteryVoltage: batteryVoltageData[index] ? batteryVoltageData[index].value : null,
    timestamp: item.timestamp || new Date().toISOString(),  // default to current date if timestamp is missing
  }));

  console.log('Combined Data:', combinedData);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={combinedData} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" tickFormatter={(tick) => new Date(tick).toLocaleTimeString()} />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        {/* Line for the primary data */}
        <Line yAxisId="left" type="monotone" dataKey="value" stroke="#072ede" name="Primary Data" />
        {/* Line for battery voltage */}
        <Line yAxisId="right" type="monotone" dataKey="batteryVoltage" stroke="#43cc04" name="Battery Voltage" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
