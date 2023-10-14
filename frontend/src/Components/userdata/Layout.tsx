import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {

  return(
    <div className="bg-bgblack  h-screen w-screen overflow-hidden flex flex-row ">
      <Sidebar />
      <div className=" flex flex-col flex-1">
        <Header />
        <div className="flex h-full overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
