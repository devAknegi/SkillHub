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
          <li className='group relative'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl duration-300 ease-in-out'>
              Option1
              <IoMdArrowDropdown />
            </span>
            <ul className='absolute left-0 top-full hidden group-hover:flex flex-col mt-3 w-40'>
              <li className='relative group '>
                <span className='flex items-center gap-2 hover:cursor-pointer duration-300 ease-in-out'>
                  Suboption 1.1
                </span>
              </li>
              <li>Suboption 1.2</li>
            </ul>
          </li>
          <li className='group relative'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
              Option2
              <IoMdArrowDropdown />
            </span>
            <ul className='absolute left-0 top-full hidden group-hover:flex flex-col mt-3 w-40'>
              <li className='relative group'>
                <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
                  Suboption 2.1
                </span>
              </li>
              <li>Suboption 2.2</li>
            </ul>
          </li>
          <li className='group relative'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
              Option3
              <IoMdArrowDropdown />
            </span>
            <ul className='absolute left-0 top-full hidden group-hover:flex flex-col mt-3 w-40'>
              <li className='relative group'>
                <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
                  Suboption 3.1
                </span>
              </li>
              <li>Suboption 3.2</li>
            </ul>
          </li>
          <li className='group relative'>
            <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
              Option4
              <IoMdArrowDropdown />
            </span>
            <ul className='absolute left-0 top-full hidden group-hover:flex flex-col mt-3 w-40'>
              <li className='relative group'>
                <span className='flex gap-2 items-center hover:cursor-pointer hover:shadow-xl rounded-xl duration-300 ease-in-out'>
                  Suboption 4.1
                </span>
              </li>
              <li>Suboption 4.2</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
