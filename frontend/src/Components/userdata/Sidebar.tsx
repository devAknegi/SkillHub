import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { RxActivityLog } from "react-icons/rx";
import { IoIosPaper } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import {
  HiOutlineViewGrid,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { handleSignOut } from "../supabase/helpers";

export const SidebarLink = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "activity",
    label: "Activity",
    path: "/",
    icon: <RxActivityLog />,
  },
  {
    key: "bitbuddy",
    label: "Find Your BitBuddy",
    path: "/findbitbuddies",
    icon: <BsPeople />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/dashboard/messages",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "blogs",
    label: "Blog Feed",
    path: "/",
    icon: <IoIosPaper />,
  },
];

export const SidebarBottomLink = [
  {
    key: "settings",
    label: "Settings",
    path: "/",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function SidebarOptionsLink({ link }: { link: any }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
export default function Sidebar() {
  return (
    <div className="bg-bgdark w-45 h-screen flex flex-col border-r border-border">
      <Link to={"/"} className="border-b border-border">
        <div className="flex items-center justify-center gap-2 p-2 ">
          <img src="/logo.png" alt="scg" className="h-10 w-10" />
          <span className="text-textdark font-bold text-lg">SkillHub</span>
        </div>
      </Link>
      
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {SidebarLink.map((link) => (
          <SidebarOptionsLink key={link.key} link={link} />
        ))}
      </div>

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {SidebarBottomLink.map((link) => (
          <SidebarOptionsLink key={link.key} link={link} />
        ))}
        <div
          className={classNames(linkClass, "cursor-pointer text-red-500")}
          onClick={async () => {
            await handleSignOut();
          }}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}
