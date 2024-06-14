import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const Options = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='ml-10'>
      <div className='relative '>
        <button
          type='button'
          className='menuButton block md:hidden p-2 rounded'
          onClick={handleMenuToggle}
        >
          <span className='flex items-center gap-2'>
            Menu <IoMdArrowDropdown />
          </span>
        </button>
        <ul
          className={`${
            menuOpen ? "flex flex-row" : "hidden"
          } md:flex gap-5 items-center flex-col font-thin sm:flex-row absolute md:relative top-full md:top-0 left-0 shadow md:shadow-none w-full md:w-auto z-10`}
        >
          <li className='group relative hover:text-ltorange hover:font-medium transition-all duration-200'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl duration-300 ease-in-out'>
              Option1
              <IoMdArrowDropdown />
            </span>
          </li>
          <li className='group relative hover:text-ltorange hover:font-medium transition-all duration-200'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
              Option2
              <IoMdArrowDropdown />
            </span>
          </li>
          <li className='group relative hover:text-ltorange hover:font-medium transition-all duration-200'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
              Option3
              <IoMdArrowDropdown />
            </span>
          </li>
          <li className='group relative hover:text-ltorange hover:font-medium transition-all duration-200'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
              Option4
              <IoMdArrowDropdown />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
