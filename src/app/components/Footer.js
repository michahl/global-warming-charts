import { ImGithub } from "react-icons/im"
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-base-200 pt-5 rounded-t-md px-10">
            <footer className="flex flex-wrap justify-between footer text-neutral-content">
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <Link href="/#features" className="link link-hover">Features</Link>
                    <Link href="/#faq" className="link link-hover">FAQ</Link>
                    <Link href="/#contact" className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link href="/#terms" className="link link-hover">Terms of use</Link>
                    <Link href="/#privacy" className="link link-hover">Privacy policy</Link>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email</span>
                        </label>
                        <div className="join">
                            <input
                                type="email"
                                placeholder="me@email.com"
                                className="input input-bordered join-item"
                            />
                            <button className="btn btn-accent join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer text-base-content border-t border-zinc-500/25 mt-5 py-5 px-1 flex flex-row justify-between">
                <aside className="flex hover:text-white/70">
                    <a href="https://github.com/michahl/green-habits">
                        <ImGithub className="w-5 h-5" />
                    </a>
                </aside>
                <a className="text-sm font-light" href="https://michahl.com">
                    <p className="flex items-center gap-1">Built with <FaHeart /> by <span className="text-green-500 hover:text-green-500/50 font-medium underline underline-offset-2">michahl</span></p>
                </a>
            </footer>
        </div>
    )
}