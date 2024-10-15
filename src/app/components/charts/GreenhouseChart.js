import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Format the X-axis labels to include both month and year
const formatXAxis = (tickItem) => {
    const { month, year } = tickItem; // Destructure month and year from the tick item
    return `${monthNames[month - 1]} ${year}`; // Format as "Month Year"
};

const GreenhouseChart = ({ data }) => {
    const lastYear = 2024;
    const lastDataPoint = data.find(d => d.year === lastYear);

    const [hoveredData, setHoveredData] = useState(null);

    const handleMouseMove = (e) => {
        if (e && e.activePayload) {
            setHoveredData(e.activePayload[0].payload);
        } else {
            setHoveredData(null);
        }
    };
    
    const displayData = hoveredData || lastDataPoint;

    if (typeof window === 'undefined') {
        return null; // Ensure the component is rendered only on the client side
    }

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 5, right: 20, color: 'white', zIndex: 10 }}>
                {displayData ? (
                    <div className='flex flex-col items-end leading-tight text-[0.8rem]'>
                        <p className='font-medium'>{displayData.year}</p>
                        <p className='text-gray-500/90'>in °C </p>
                        <p className='font-semibold'>{displayData.averageTemp}</p>
                    </div>  
                ) : ''}
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 75, right: 20, left: -15, bottom: 5,
                    }}
                >
                    <XAxis 
                        dataKey="month" 
                        tick={{ fontSize: 10, fill: 'white' }} 
                        tickFormatter={(tick, index) => {
                            const tickItem = data[index];
                            return formatXAxis(tickItem); // Always format the label
                        }} 
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis 
                        tick={{ fontSize: 10, fill: 'white' }} 
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip/>
                    <Area type="monotone" dataKey="average_co2" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="average_n2o" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="average_ch4" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GreenhouseChart;
