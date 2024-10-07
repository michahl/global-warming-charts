"use client"
import { useState, useEffect } from "react";
import TemperatureChart from "./AvgTemperatureChart";

export default function AverageTemp() {
    const [averageTemps, setAverageTemps] = useState([]);
    const baselineMeanTemperature = 13.84; // Pre-industrial baseline temperature

    // Calculate average temperature from anomalies
    const calculateAverageTemperature = (data, baseline) => {
        const validAnomalies = data.filter(anomaly => anomaly !== null); // Remove null values
        const actualTemperatures = validAnomalies.map(anomaly => baseline + anomaly); // Convert anomalies to temperatures
        const totalTemp = actualTemperatures.reduce((acc, curr) => acc + curr, 0); // Sum temperatures
        const averageTemp = totalTemp / validAnomalies.length; // Calculate average
        return Math.round(averageTemp * 100) / 100; // Round to two decimal places
    };

    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            try {
                const response = await fetch('/api/nasa/temperature-anomalies');
                const data = await response.json();
                
                // Calculate average temperature for each year
                const avgTemps = data.map(yearData => ({
                    year: yearData.year,
                    averageTemp: calculateAverageTemperature(yearData.data, baselineMeanTemperature)
                }));

                setAverageTemps(avgTemps);
            } catch (error) {
                console.error('Error fetching temperature anomalies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-black/65 rounded-2xl border-2 border-blue-950/20">
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-row items-center justify-between px-8">
                    <h2 className="text-white/85 font-semibold p-4">Yearly Average Temperature</h2>
                    <p className="text-xs text-blue-500 font-medium border border-blue-500/80 py-1 px-2 rounded-2xl">Since 1880</p>
                </div>
                <TemperatureChart data={averageTemps} />
            </div>
        </div>
    );
}
