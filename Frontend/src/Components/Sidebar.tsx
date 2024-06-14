import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineCog,
  HiOutlineUserGroup,
  HiOutlineMail,
  HiOutlineLogout,
} from "react-icons/hi";
import { MdOutlineContactSupport } from "react-icons/md";

interface SidebarProps {
  sidebarVisible: boolean;
}
const elements = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "projects",
    label: "Projects",
    icon: <HiOutlineCube />,
  },
  {
    key: "messages",
    label: "Messages",
    icon: <HiOutlineMail />,
  },
  {
    key: "community",
    label: "Community",
    icon: <HiOutlineUserGroup />,
  },
  {
    key: "settings",
    label: "Settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    icon: <MdOutlineContactSupport />,
  },
  {
    key: "logout",
    label: "Logout",
    icon: <HiOutlineLogout />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarVisible }) => {
  const location = useLocation();
  return (
    <div
      className={`top-0 left-0 w-50 bg-gray-900/20 text-white transition-transform duration-300 ${
        sidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className='flex flex-col h-[90vh] overflow-hidden p-2'>
        <div className='flex flex-col flex-grow py-5 gap-4'>
          {elements.slice(0, 4).map((element) => (
            <Link
              key={element.key}
              to={`/app/${element.key}`}
              className={`flex items-center px-4 py-2 text-md font-medium text-gray-300 transition-colors duration-300 hover:bg-gray-700 rounded hover:no-underline ${
                location.pathname === `/app/${element.key}`
                  ? "bg-gray-700"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className='mr-3 text-xl'>{element.icon}</span>
              {element.label}
            </Link>
          ))}
        </div>
        <div className='mt-auto border-t pt-3'>
          {elements.slice(4,-1).map((element) => (
            <Link
              key={element.key}
              to={`/app/${element.key}`}
              className={`flex items-center px-4 py-2 text-md font-medium text-gray-300 transition-colors duration-300 hover:bg-gray-700 rounded hover:no-underline ${
                location.pathname === `/app/${element.key}`
                  ? "bg-gray-700"
                  : "text-gray-300 hover:bg-gray-700"
              } ${
                element.key === "logout"
                  ? "text-red-500 hover:text-red-500 hover:bg-transparent"
                  : "text-gray-300"
              }`}
            >
              <span className='mr-3 text-xl'>{element.icon}</span>
              {element.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
