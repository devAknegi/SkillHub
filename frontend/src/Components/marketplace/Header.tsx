import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="border-b">
            <Link to={"/"} className="border-b border-border">
                <div className="flex items-center gap-2 p-4 ">
                    <img src="/logo.png" alt="scg" className="h-10 w-10" />
                    <span className="text-textdark font-bold text-lg">SkillHub</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header