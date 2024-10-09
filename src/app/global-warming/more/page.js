"use client";

import Link from "next/link";
import AverageTemp from "../../components/AverageTemp";
import AverageTempAnomaly from "../../components/AverageTempAnomaly";
import TempChange from "../../components/TempChange";

import { TiArrowLeft } from "react-icons/ti";
import Footer from "../../components/Footer";

export default function GlobalWarming() {
    return (
        <div className="p-5 min-h-screen">
            <main className="mx-auto space-y-5 max-w-3xl">
                <section className="text-white/80 p-2 flex justify-end">
                    <Link href="/global-warming" className="rounded-full p-2 bg-gray-800 hover:bg-gray-800/75">
                        <TiArrowLeft className="text-blue-500 cursor-pointer w-6 h-6" />
                    </Link>
                </section>

                <section className="p-2">
                    <h3 className="font-semibold text-md">What is Global Warming?</h3>
                    <p className="text-[0.9rem]">
                        Global warming refers to the long-term rise in the Earth's average surface temperature due to human activities, primarily the release of greenhouse gases (GHGs) such as carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O). These gases trap heat in the atmosphere, creating a "greenhouse effect" that leads to warming. The main source of these emissions comes from burning fossil fuels (coal, oil, and natural gas) for energy, deforestation, and industrial processes.
                    </p>
                    <p className="text-[0.9rem] mt-2">
                        The Earth's climate has changed naturally over millions of years, but the current rate of warming is unprecedented and is directly linked to human activities since the industrial revolution.
                    </p>
                </section>

                <section className="grid grid-cols-1 gap-1.5">
                    <div className="sm:col-span-2 w-full flex flex-col items-center">
                        <div className="w-full">
                            <AverageTempAnomaly />
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[0.9rem]">
                                <strong>Average Temperature Anomalies:</strong> This chart shows the deviations of the average 
                                global temperatures from a baseline average. Positive anomalies indicate temperatures above the 
                                baseline, while negative anomalies indicate temperatures below the baseline. This helps us 
                                understand the trend of rising temperatures over time.
                            </p>
                        </div>
                    </div>
                    <div className="sm:col-span-2 w-full flex flex-col items-center">
                        <div className="w-full">
                            <AverageTemp />
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[0.9rem]">
                                <strong>Average Temperatures:</strong> This chart displays the average global temperatures over 
                                a specific period. It provides a clear picture of how the Earth's temperature has changed over 
                                the years, highlighting periods of significant warming.
                            </p>
                        </div>
                    </div>
                    <div className="sm:col-span-2 w-full flex flex-col items-center">
                        <div className="w-full">
                            <TempChange />
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[0.9rem]">
                                <strong>Temperature Changes:</strong> This chart illustrates the changes in temperature over 
                                different regions and time periods. It helps identify areas that are experiencing more rapid 
                                warming and the potential impacts on those regions.
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}