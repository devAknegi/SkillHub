import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectSession } from "../Store/Slices/authSlice";

import * as router from "react-router-dom"


function Layout() {

  const sessionData = useSelector(selectSession);
  console.table(router.Navigate)
  return sessionData?.access_token?(
    <div className="bg-bgblack  h-screen w-screen overflow-hidden flex flex-row ">
      <Sidebar />
      <div className=" flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ):<></>;
}

export default Layout;
