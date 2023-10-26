import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MarketPlace = () => {
    return (
        <div className="bg-bgblack  h-screen w-screen overflow-hidden flex flex-col">
            <Header />
            <div className=" flex flex-row flex-1">
                <Sidebar />
                <div className="flex h-full overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MarketPlace