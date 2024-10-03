import Image from "next/image"
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar bg-gray-700/35 rounded-2xl px-2 py-2 sm:mx-2 md:mx-0">
            <div className="navbar-start">
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    alt="logo"
                    className="btn btn-ghost btn-square p-1"
                />
            </div>
            <div className="navbar-center">
                <a className="font-semibold text-lg" href="/">Green Habits</a>
            </div>
            <div className="navbar-end">
                <a href="/login" className="px-5 btn btn-success rounded-3xl uppercase text-white">
                    login
                </a>
            </div>
        </nav>
    )
}