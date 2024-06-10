import React from 'react';
import {
  HiOutlineCog,
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineLogout
} from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";

interface SideNavbarProps {
  isVisible: boolean;
}

const elements = [
  {
    key: "content_1",
    label: "Home",
    icon: <HiOutlineHome />,
  },
  {
    key: "content_2",
    label: "Dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "content_3",
    label: "Projects",
    icon: <HiOutlineCube />,
  },
  {
    key: "content_4",
    label: "Create Team",
    icon: <HiOutlineCube />,
  }
];

const SideNavbar: React.FC<SideNavbarProps> = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className="flex flex-col w-60 h-[90vh] overflow-hidden p-2">
      <div className="flex flex-col flex-grow py-5 gap-4">
        {elements.map((element) => (
          <button
            key={element.key}
            className="flex items-center px-4 py-2 text-lg font-medium transition-colors duration-200 transform border-l-4 border-transparent hover:bg-gray-300 hover:border-gray-500"
            onClick={() => console.log(`${element.label} clicked`)}
          >
            <span className="mr-3 text-xl">{element.icon}</span>
            {element.label}
          </button>
        ))}
        <div className='mt-auto cursor-pointer'>
          <div className="flex items-center px-4 py-2 text-lg font-medium transition-colors duration-200 transform border-l-4 border-transparent hover:bg-gray-300 hover:border-gray-500">
            <span className="mr-3 text-xl"> <HiOutlineCog />  </span>
            Settings
          </div>
          <div className="flex  items-center px-4 py-2 text-lg font-medium transition-colors duration-200 border hover:text-red-700 hover:border-red-500 ">
            <span className="mr-3 text-xl"> <HiOutlineLogout />  </span>
            LOGOUT
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar
