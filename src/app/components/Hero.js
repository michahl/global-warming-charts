import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-wrap items-center justify-center my-4">
            <section className="max-w-2xl">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        Take <span className="text-success">simple steps</span> for a sustainable future
                    </h1>
                    <p className="font-light min-w-fit">
                        Track your eco-friendly actions, unlock rewards, and build a greener world-one small change at a time!
                    </p>
                    <div className="mt-9 flex flex-col justify-center items-center gap-0">
                        <Link
                            href='/signup'
                            className="btn btn-success px-12 text-base uppercase text-white rounded-full"
                        >
                            GET STARTED
                        </Link>
                        <Link
                            href='/login'
                            className="text-xs btn btn-link text-inherit hover:text-white/60 font-medium no-underline"
                        >
                            I HAVE AN ACCOUNT
                        </Link>
                    </div>
                </div> 
            </section>
        </div>
    )
}