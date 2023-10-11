import "../../index.css"; //to implement grid coz tailwind sucks when it come to grid layouts
import { RiProfileLine } from "react-icons/ri";

const Mainserachpage = () => {
  return (
    <div className="mainsearch grid h-screen w-screen">
      <div className="flex items-center justify-between p-5">
        <i className="text-4xl text-textdark">
          <RiProfileLine />
        </i>
        <h1 className="text-3xl text-textdark">Find your bitBuddies</h1>
      </div>
      <div className=" filters grid border-t-2 border-border">
        <div className="filteritems grid">
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-violet-800">
            <h1 className="text-textdark text-center"> PixelPal : Frontend Expert</h1>
          </div>
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-zinc-50">
            <h1 className="text-textdark text-center">Backend Guru: DevMate</h1>
          </div>
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-amber-200">
            <h1 className="text-textdark text-center">Database Pro: DataMaestro </h1>
          </div>
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-orange-700">
            <h1 className="text-textdark text-center"> UI/UX Whiz: DesignDynamo</h1>
          </div>
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-lime-400">
            <h1 className="text-textdark text-center"> Security Sentinel: CodeGuardian</h1>
          </div>
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-emerald-600">
            <h1 className="text-textdark text-center"> API Alchemist: EndpointEnchanter</h1>
          </div>

          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-yellow-400">
            <h1 className="text-textdark text-center"> Mobile Maestro: AppAdept</h1>
          </div>
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-cyan-800">
            <h1 className="text-textdark text-center"> Testing Titan: BugBuster</h1>
          </div>
          <div className="filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-200 shadow-sm border border-blue-400">
            <h1 className="text-textdark text-center">Deployment Dynamo: LaunchLuminary</h1>
          </div>
        </div>
        <div className="border-border border-4 border-r-0 flex flex-col p-1">
        <h1 className="text-textdark text-center">BitBuddies Available</h1>
        </div>
      </div>
    </div>
  );
};

export default Mainserachpage;
