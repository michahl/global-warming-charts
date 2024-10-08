import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine, defs, linearGradient, stop, ReferenceDot } from 'recharts';

const TempAnomalyChart = ({ data }) => {
    // Find the data point for the year 2024
    const dataPoint2024 = data.find(point => point.year === 2024);

    const [hoveredData, setHoveredData] = useState(dataPoint2024);

    const xTicks = [1880, 1900, 1920, 1940, 1960, 1980, 2000, 2024];

    const axisTickStyle = {
        fontSize: 10,
        fill: '#fffff6'
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            setHoveredData(payload[0].payload);
        }
        else {
            setHoveredData(null);
        }
    };

    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div style={{ position: 'absolute', top: 5, right: 35, color: 'white', zIndex: 10 }}>
                {hoveredData ? (
                    <div className='flex flex-col items-end leading-none'>
                        <p className='font-medium text-[1.05rem]'>{hoveredData.year}</p>
                        <p className='text-gray-500/90 text-xs'>in °C </p>
                        <p className='font-semibold text-[1.05rem]'>{hoveredData.averageTemp}</p>
                    </div>  
                ) : ''}
            </div>
            <ResponsiveContainer width="100%" height={135}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorAnomaly" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ff4c0b"/> {/* Red color */}
                            <stop offset="35%" stopColor="#ff9b0b" /> {/* Orange color */}
                            <stop offset="65%" stopColor="#ffb20b" /> {/* Cyan color */}
                            <stop offset="75%" stopColor="#00ffff" /> {/* Cyan color */}
                            <stop offset="100%" stopColor="#00ffff"/> {/* Cyan color */}
                        </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="year" 
                        ticks={xTicks} 
                        axisLine={false} 
                        tickLine={false} 
                        tick={axisTickStyle}
                    />
                    <YAxis 
                        ticks={[0, 0.5, 1, 1.5]} 
                        axisLine={false} 
                        tickLine={false} 
                        tick={axisTickStyle}
                        domain={[0, 1.5]} // Adjust the domain to remove negative space
                        allowDataOverflow={false} // Allow data overflow
                    />
                    <Tooltip 
                        content={<CustomTooltip />} // Custom tooltip content
                    />
                    <Area 
                        type="monotone" 
                        dataKey="averageAnomaly" 
                        fill="url(#colorAnomaly)" 
                        stroke="none" 
                    />
                    {/* Add a dot for the year 2024 data point */}
                    {dataPoint2024 && (
                        <>
                            <ReferenceDot 
                                x={dataPoint2024.year} 
                                y={dataPoint2024.averageAnomaly} 
                                r={2} 
                                fill="#ffffff"
                                className="animate-ping transition-all ease-out duration-700"
                            />
                        </>
                    )}
                    <ReferenceLine x="year" stroke="rgba(255, 255, 255, 0.5)" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TempAnomalyChart;
