import Image from "next/image"
import Link from "next/link"
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar bg-gray-700/35 rounded-2xl p-2 sm:mx-2 md:mx-0">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost p-1">
                    <Image
                        src={logo}
                        width={35}
                        height={35}
                        alt="logo"
                        className=""
                    />
                </Link>
            </div>
            <div className="navbar-end">
                <Link
                    href='/login'
                    className="btn btn-success text-white uppercase rounded-3xl"
                >
                    login
                </Link>
            </div>
        </nav>
    )
}