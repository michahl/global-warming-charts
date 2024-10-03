'use client'
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <section className="bg-gray-700/35 p-5 rounded-lg w-[28rem] md:w-[32rem]">
                <div className=" rounded-lg shadow-sm">
                    <h1 className="text-white/70 text-2xl font-semibold mb-5">Welcome back 👋</h1>
                    { error && <p className="text-red-500 text-sm my-2">{error}</p>}
                    <form className="flex flex-col gap-2.5">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="ring-1 ring-zinc-700/25 bg-gray-700/35 focus:outline-none bg-base-200 rounded-md py-1.5 px-5"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="ring-1 ring-zinc-700/25 bg-gray-700/35 focus:outline-none rounded-md py-1.5 px-5"
                            required
                        />
                        <div>
                            <Link 
                                href='/forgot-password'
                                className="underline text-sm font-medium"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <button className="btn btn-success text-white uppercase rounded-2xl">
                            { loading && <span className="loading loading-spinner"> </span>}LOGIN
                        </button>
                    </form>
                    <div className="border-t border-zinc-500/35 my-3" />
                    <button className="btn w-full bg-white text-base text-black gap-2 border hover:bg-zinc-100/90 uppercase rounded-2xl">
                        { loading && <span className="loading loading-spinner"> </span>}
                        <FcGoogle className="w-6 h-6"/>
                        <p className="text-sm">Sign in with Google</p>
                    </button>
                </div>
            </section>
            <div className="flex gap-1 mt-2 text-sm">
                <p>Don't have an account?</p>
                <Link href='/signup' className="link hover:text-white/80">
                    Register here
                </Link>
            </div>
        </div>
    )
}