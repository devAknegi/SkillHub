import { Link, Outlet } from "react-router-dom";

const Exchange = () => {
  return (
    <div className="bg-bgdark min-h-screen w-screen">
      <div className="h-[10vh] flex justify-center items-center">
        <h1 className="text-5xl font-bold text-textdark">SKILL EXCHANGE </h1>
      </div>
      <div className="h-[5vh] w-[90%] mx-auto flex justify-around mt-5">
        <Link
          to={"/exchange/ongoing"}
          className="w-[25%] h-[100%] cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-600 border border-green-600 rounded-xl flex p-1 items-center justify-center text-xl font-bold text-textdark "
        >
          <h1>Ongoing Exchanges</h1>
        </Link>
        <Link to={"/exchange/pending"} className="w-[25%] h-[100%] cursor-pointer transition-all duration-200 ease-in-out hover:bg-yellow-600 border border-yellow-600 rounded-xl flex p-1 items-center justify-center text-xl font-bold text-textdark">
          <h1>pending Exchange requests</h1>
        </Link>
        <Link to={"/exchange/completed"} className="w-[25%] h-[100%] cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 border border-red-600 rounded-xl flex p-1 items-center justify-center text-xl font-bold text-textdark ">
          <h1>Completed Exchanges</h1>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Exchange;
