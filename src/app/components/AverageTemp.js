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
        <div className="flex justfiy-center items-center min-h-screen">
            {
                averageTemps.length > 0 ? (
                    <TemperatureChart data={averageTemps} />
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
}
