import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GreenhouseChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="average_co2" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="average_n2o" stroke="#82ca9d" />
                <Line type="monotone" dataKey="average_ch4" stroke="#ffc658" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default GreenhouseChart;