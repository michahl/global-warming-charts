import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center pt-5 space-y-5">
            <div className="text-gray-400/80 text-sm flex flex-row items-center gap-1">
                <Image src="/bw-logo.png" alt='logo' width={20} height={20}/>
                <p>
                    Most recent data from NOAA, NASA, NASA CERES, NASA ERBE
                </p>
            </div>
            <button
                className="bg-blue-600 text-sm text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
                Share link 🌍
            </button>
            <div className="max-w-lg mt-5">
                <div className="text-sm flex flex-wrap justify-center items-center gap-3.5 leading-none">
                    <Link href="/" className="text-blue-500 hover:underline">Home</Link>
                    <Link href="/global-warming" className="text-blue-500 hover:underline">Global Warming</Link>
                    <Link href="/co2" className="text-blue-500 hover:underline">CO₂ Carbon Dioxide</Link>
                    <Link href="/methane" className="text-blue-500 hover:underline">CH₄ Methane</Link>
                    <Link href="/n2o" className="text-blue-500 hover:underline">N₂O Nitrous Oxide</Link>
                    <Link href="/about" className="text-blue-500 hover:underline">About</Link>
                    <Link href="/terms" className="text-blue-500 hover:underline">Privacy & Terms</Link>
                </div>
                <div className="flex flex-col items-center justify-center my-8">
                    <Image src="/logo.png" width={30} height={30} alt="Earth Pulse Logo" />
                    <p className="text-gray-400/65 text-sm mt-1">
                        &copy; {new Date().getFullYear()} Earth Pulse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
