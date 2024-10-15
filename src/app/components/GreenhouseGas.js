"use client";

import { useState, useEffect } from "react";
import GreenhouseChart from "./charts/GreenhouseChart";

export default function GreenhouseGas() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [co2Response, n2oResponse, ch4Response] = await Promise.all([
                    fetch('/api/noaa/co2'),
                    fetch('/api/noaa/n2o'),
                    fetch('/api/noaa/ch4')
                ]);

                const [co2Data, n2oData, ch4Data] = await Promise.all([
                    co2Response.json(),
                    n2oResponse.json(),
                    ch4Response.json()
                ]);

                const combinedData = co2Data
                    .filter(co2Item => co2Item.year > 2004)
                    .map(co2Item => {
                        const n2oItem = n2oData.find(item => item.year === co2Item.year && item.month === co2Item.month);
                        const ch4Item = ch4Data.find(item => item.year === co2Item.year && item.month === co2Item.month);

                        return {
                            year: co2Item.year,
                            month: co2Item.month,
                            average_co2: co2Item.average,
                            average_n2o: n2oItem ? n2oItem.average : null,
                            average_ch4: ch4Item ? ch4Item.average : null
                        };
                    })
                    .filter(item => item.average_co2 !== null && item.average_n2o !== null && item.average_ch4 !== null);

                setData(combinedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-3xl bg-zinc-950/80 rounded-2xl border-2 border-gray-700/40 shadow-xl">
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-row items-center justify-between px-4 sm:px-5 mt-5">
                    <h2 className="text-white/85 font-semibold">Monthly Greenhouse Emissions</h2>
                </div>
                <GreenhouseChart data={data} />
            </div>
        </div>
    );
}
