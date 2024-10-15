import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function SeaLevelChart({ data}) {
    const lastYear = new Date().getFullYear();
    const lastDataPoint = data.find(d => Number(d.year) === lastYear);
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
            <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data} margin={{ top: 75, right: 20, left: -25, bottom: 5 }} onMouseMove={handleMouseMove} onMouseLeave={() => setHoveredData(null)} >
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis 
                            dataKey="year" 
                            tickFormatter={(tick) => `${tick}`} 
                            tick={{ fill: 'white', fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                    />
                    <YAxis
                            tick={{ fill: 'white', fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                    />
                    <Tooltip
                        content={<></>}
                    />
                    <Line type="monotone" dataKey="avgCW_2011" stroke="#8884d8" dot={false} />
                    <Line type="monotone" dataKey="avgUHSLC_FD" stroke="#82ca9d" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
