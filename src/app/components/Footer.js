import { ImGithub } from "react-icons/im"
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer text-base-content border-t border-gray-500/30 py-5 px-1 flex flex-row justify-between">
            <aside className="flex hover:text-white/70">
                <a href="https://github.com/michahl/green-habits">
                    <ImGithub className="w-5 h-5" />
                </a>
            </aside>
            <a className="text-sm font-light" href="https://michahl.com">
                <p className="flex items-center gap-1">Built with <FaHeart /> by <span className="text-green-500 hover:text-green-500/50 font-medium underline underline-offset-2">michahl</span></p>
            </a>
        </footer>
    )
}