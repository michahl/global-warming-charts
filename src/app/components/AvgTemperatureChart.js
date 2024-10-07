import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';

const TemperatureChart = ({ data = [] }) => {
    const lastYear = 2024;
    const lastDataPoint = data.find(d => d.year === lastYear);

    const [xTicks, setXTicks] = useState([1880, 1900, 1920, 1940, 1960, 1980, 2000, 2024]);
    const [yTicks, setYTicks] = useState([11, 12, 13, 14, 15]);
    const [hoveredData, setHoveredData] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setXTicks([1890, 1900, 1920, 1940, 1960, 1980, 2000, 2024]);
                setYTicks([11, 13, 15]);
            } else {
                setXTicks([1890, 1900, 1920, 1940, 1960, 1980, 2000, 2024]);
                setYTicks([11, 12, 13, 14, 15]);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set the correct ticks

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e) => {
        if (e && e.activePayload) {
            setHoveredData(e.activePayload[0].payload);
        } else {
            setHoveredData(null);
        }
    };

    const displayData = hoveredData || lastDataPoint;

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 5, right: 35, color: 'white', zIndex: 10 }}>
                {displayData ? (
                    <div className='flex flex-col items-end leading-none'>
                        <p className='font-medium text-[1.05rem]'>{displayData.year}</p>
                        <p className='text-gray-500/90 text-xs'>in °C </p>
                        <p className='font-semibold text-[1.05rem]'>{displayData.averageTemp}</p>
                    </div>  
                ) : ''}
            </div>
            <ResponsiveContainer width="100%" height={window.innerHeight < 800 ? 230 : 275}>
                <AreaChart data={data} margin={{ top: 75, right: 35, left: 0, bottom: 10 }} onMouseMove={handleMouseMove} onMouseLeave={() => setHoveredData(null)}>
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis 
                        dataKey="year" 
                        ticks={xTicks} 
                        tick={{ fill: 'white', fontSize: 12 }} // Adjust font size here
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis 
                        domain={[11, 'dataMax']} 
                        ticks={yTicks} 
                        tick={{ fill: 'white', fontSize: 12 }} // Adjust font size here
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip 
                        content={<></>} // Disable tooltip content
                    />
                    <ReferenceLine y={13.84} stroke="#8A8A8A" strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="averageTemp" fill="#8A8A8A" stroke="#8A8A8A" />
                    {lastDataPoint && (
                        <>
                            <ReferenceDot x={lastDataPoint.year} y={lastDataPoint.averageTemp} r={4} fill="#8A8A8A" />
                        </>
                    )}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TemperatureChart;