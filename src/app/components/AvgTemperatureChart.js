import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Dot } from 'recharts';

const TemperatureChart = ({ data = [] }) => {
    const lastYear = 2024;
    const lastDataPoint = data.find(d => d.year === lastYear);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis 
                    dataKey="year" 
                    ticks={[1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2024]} 
                    tick={{ fill: 'white', fontSize: 12 }} // Adjust font size here
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis 
                    domain={[11, 'dataMax']} 
                    ticks={[11, 12, 13, 14, 15]} 
                    tick={{ fill: 'white', fontSize: 12 }} // Adjust font size here
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip />
                <Legend />
                <ReferenceLine y={13.84} stroke="#A9A9A9" strokeDasharray="3 3" />
                <Area type="monotone" dataKey="averageTemp" fill="#d3d3d3" stroke="#d3d3d3" />
                {lastDataPoint && (
                    <Dot cx={lastDataPoint.year} cy={lastDataPoint.averageTemp} r={5} fill="red" />
                )}
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default TemperatureChart;
