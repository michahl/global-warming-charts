"use client";
import { useState, useEffect } from "react";
import SeaLevelChart from "./charts/SeaLevelChart";

export default function SeaLevel() {
    const [data, setData] = useState([]);

    const calculateYearlyAverages = (data) => {
        const yearlyData = {};
        data.forEach((entry) => {
          const { Year, CW_2011, UHSLC_FD } = entry;
          if (!yearlyData[Year]) {
            yearlyData[Year] = { count: 0, totalCW_2011: 0, totalUHSLC_FD: 0 };
          }
          yearlyData[Year].totalCW_2011 += CW_2011 || 0;
          yearlyData[Year].totalUHSLC_FD += UHSLC_FD || 0;
          yearlyData[Year].count += 1;
        });
    
        return Object.entries(yearlyData).map(([year, values]) => ({
          year,
          avgCW_2011: values.totalCW_2011 / values.count,
          avgUHSLC_FD: values.totalUHSLC_FD / values.count,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/noaa/sea-level');
                const rawData = await response.json();

                // Process and group data by year
                const yearlyAverages = {};

                rawData.forEach(item => {
                    const year = item.Year;
                    const cwValue = item.CW_2011;
                    const uhsValue = item.UHSLC_FD;

                    if (!yearlyAverages[year]) {
                        yearlyAverages[year] = { totalCW: 0, totalUHS: 0, count: 0 };
                    }

                    // Only include non-null values for averaging
                    if (cwValue !== null) {
                        yearlyAverages[year].totalCW += cwValue;
                    }
                    if (uhsValue !== null) {
                        yearlyAverages[year].totalUHS += uhsValue;
                    }

                    yearlyAverages[year].count += 1; // Increment count for each entry
                });

                // Create the final data with averages for each year
                const finalData = Object.keys(yearlyAverages).map(year => {
                    const avgCW = yearlyAverages[year].totalCW / yearlyAverages[year].count || 0;
                    const avgUHS = yearlyAverages[year].totalUHS / yearlyAverages[year].count || 0;
                    
                    return {
                        year: year,
                        avgCW_2011: avgCW,
                        avgUHSLC_FD: avgUHS
                    };
                });

                const processedData = calculateYearlyAverages(finalData)

                console.log(finalData)
                setData(finalData); // Set the final processed data
            } catch (error) {
                console.error('Error fetching sea level data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-3xl bg-zinc-950/80 rounded-2xl border-2 border-gray-700/40 shadow-xl">
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-row items-center justify-between px-4 sm:px-5 mt-5">
                    <h2 className="text-white/85 font-semibold">Yearly Sea Level Change</h2>
                </div>
                <SeaLevelChart data={data} />
            </div>
        </div>
    );
}