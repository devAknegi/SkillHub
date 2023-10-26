import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";


export const SidebarLink = [
  {
    key: "React.js",
    label: "React.js",
    path: "/",
  },
  {
    key: "Angular.js",
    label: "Angular.js",
    path: "/",
  },
  {
    key: "Vue.js",
    label: "Vue.js",
    path: "/",
  },
  {
    key: "Next.js",
    label: "Next.js",
    path: "/",
  },
  {
    key: "Three.js",
    label: "Three.js",
    path: "/",
  },
  {
    key: "React Native",
    label: "React Native",
    path: "/",
  },
  {
    key: "GO",
    label: "GO",
    path: "/",
  },
  {
    key: "Java",
    label: "Java",
    path: "/",
  },
  {
    key: "C++",
    label: "C++",
    path: "/",
  },
  {
    key: "Python",
    label: "Python",
    path: "/",
  },
  {
    key: "Machine Learning",
    label: "Machine Learning",
    path: "/",
  },
];


const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function SidebarOptions({ link }: { link: any }) {
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
    <div className="bg-bgdark w-60 h-screen flex flex-col border-r border-border">      
      <div className="py-8 flex flex-1 flex-col gap-2.5">
        {SidebarLink.map((link) => (
          <SidebarOptions key={link.key} link={link} />
        ))}
      </div>

    </div>
  );
}