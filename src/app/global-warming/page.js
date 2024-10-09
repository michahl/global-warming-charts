"use client";

import Link from "next/link";
import AverageTemp from "../components/AverageTemp"
import AverageTempAnomaly from "../components/AverageTempAnomaly"
import TempChange from "../components/TempChange"

import { LuHelpingHand } from "react-icons/lu";
import Footer from "../components/Footer";

export default function GlobalWarming() {
    return (
        <div className="p-5 min-h-screen">
            <main className="mx-auto space-y-5">
                <section className="text-white/80 p-2 flex items-center justify-between">
                    <div className="leading-tight">
                        <h2 className="font-semibold text-lg">Global Warming</h2>
                        <p className="text-[0.9rem]">Crucial indicators of Earth's rising temperatures</p>
                    </div>
                    <Link href="/global-warming/more" className="rounded-full p-2 bg-gray-800 hover:bg-gray-800/75">
                        <LuHelpingHand className="text-blue-500 cursor-pointer w-6 h-6" />
                    </Link>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    <div className="sm:col-span-2 w-full">
                        <AverageTempAnomaly />
                    </div>
                    <AverageTemp />
                    <TempChange />
                </section>

                <Footer />

            </main>
        </div>
    )
}