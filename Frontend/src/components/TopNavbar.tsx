//

import logo from "/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


interface TopNavbarProps {
    toggleSideNavbar: () => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ toggleSideNavbar }) => {
    return (
        <div className="h-[10%] shadow-md flex  p-3 gap-4 ">
            <button onClick={toggleSideNavbar}>
                <span className="text-2xl"><RxHamburgerMenu /></span>
            </button>
            <img src={logo} alt="logo" />
            <ul className="flex gap-5 items-center " style={{ listStyle: "none" }}>
                <li className="flex gap-2 items-center font-bold hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out" ><span>option1 </span><IoMdArrowDropdown />  </li>
                <li className="flex gap-2 items-center font-bold hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out"><span>option2 </span><IoMdArrowDropdown /> </li>
                <li className="flex gap-2 items-center font-bold hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out"><span>option3 </span><IoMdArrowDropdown /> </li>
                <li className="flex gap-2 items-center font-bold hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out"><span>option4 </span><IoMdArrowDropdown /> </li>
                <li className="flex gap-2 items-center font-bold hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out"><span>option5 </span><IoMdArrowDropdown /> </li>
            </ul>
            <div style={{ marginLeft: "auto" }} className="flex gap-10 items-center font-bold text-4xl">
                <span className="hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out" ><IoNotificationsOutline /></span>
                <span className="hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out" > <IoSettingsOutline /> </span>
                <span className="hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out" ><CgProfile />     </span>
            </div>
        </div>

    )
}

export default TopNavbar