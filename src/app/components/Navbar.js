import Image from "next/image"
import Link from "next/link"
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar bg-gray-700/35 rounded-2xl p-2 sm:mx-2 md:mx-0">
            <div className="navbar-start">
                <Link href="/">
                    <Image
                        src={logo}
                        width={80}
                        height={80}
                        alt="logo"
                        className="btn btn-ghost btn-square p-1"
                    />
                </Link>
            </div>
            <div className="navbar-end">
                <Link href="/login" className="px-5 btn btn-success rounded-3xl uppercase text-white">
                    login
                </Link>
            </div>
        </nav>
    )
}