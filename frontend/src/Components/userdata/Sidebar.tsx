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

const SidebarLink = [
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
    path: "/",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "blogs",
    label: "Blog Feed",
    path: "/",
    icon: <IoIosPaper />,
  },
];

const SidebarBottomLink = [
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
  //bro correct the type of this for now i have used any
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
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <img src="/logo.png" alt="scg" className="h-12 w-12" />
        <span className="text-neutral-200 text-lg">SkillHub</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {SidebarLink.map((link) => (
          <SidebarOptionsLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {SidebarBottomLink.map((link) => (
          <SidebarOptionsLink key={link.key} link={link} />
        ))}
        <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}
