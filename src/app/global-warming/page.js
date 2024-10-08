"use client";

import AverageTemp from "../components/AverageTemp"
import AverageTempAnomaly from "../components/AverageTempAnomaly"
import TempChange from "../components/TempChange"

export default function GlobalWarming() {
    return (
        <div className="mx-4 my-10 flex flex-col gap-1"> 
            <AverageTempAnomaly />
            <AverageTemp />
            <TempChange />
        </div>
    )
}