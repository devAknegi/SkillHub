import { toast } from "sonner";
const Nav = () => {
  return (
    <div className="border-border border-solid border-b-[0.5px] sticky top-0 left-0 right-0 z-50 h-[4rem] bg-transparent backdrop-blur-sm">
      <div className="navbar h-full w-[80%] pl-4 pr-4 mr-auto ml-auto flex justify-between items-center">
        <div>
          <div className="img p-2 h-full w-16 flex gap-1  items-center ">
            <img src="/logo.png" alt="scg" className="h-full w-full" />
            <h1 className="text-textdark text-2xl">SkillHub</h1>
          </div>
        </div>
        <div className="flex gap-3">
          {" "}
          <button
            className="bg-transparent p-3 hover:bg-richtextdark rounded-xl transition-all duration-200 text-textdark border border-solid border-richtextdark"
            onClick={() => {
              toast.error("^^");
            }}
          >
            sign-up
          </button>
          <button
            className="bg-richtextdark p-3 hover:bg-hover rounded-xl transition-all duration-200 text-textdark"
            onClick={() => {
              toast.error("^_^");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
