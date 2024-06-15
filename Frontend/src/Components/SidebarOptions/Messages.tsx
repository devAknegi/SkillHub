import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Searchbar from "../Searchbar";
import { HiChatAlt } from "react-icons/hi";
import { useState } from "react";

interface User {
  key: string;
  name: string;
  icons: string;
}

const Messages = () => {
  const userData: User[] = [
    {
      key: "id1",
      name: "Ankush Negi",
      icons: "",
    },
    {
      key: "id2",
      name: "Ankit Bhist",
      icons: "",
    },
    {
      key: "id3",
      name: "Ankush Negi1",
      icons: "",
    },
    {
      key: "id4",
      name: "Ankit Bhist1",
      icons: "",
    },
    {
      key: "id5",
      name: "Ankush Negi2",
      icons: "",
    },
    {
      key: "id6",
      name: "Ankit Bhist2",
      icons: "",
    },
    {
      key: "id7",
      name: "Ankush Negi3",
      icons: "",
    },
    {
      key: "id8",
      name: "Ankit Bhist3",
      icons: "",
    },
  ];

  const [activeUser, setActiveUser] = useState<User | null>(null);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleOptions = () => {
    <div className='w-10 h-10 border p-2 flex items-center justify-center flex-col'>
      <div className='text-md font-normal'>View Profile</div>
      <div className='text-md font-normal'>Clear Chats</div>
      <div className='text-md font-normal'>Clear Media</div>
      <div className='text-md font-normal'>Settings</div>
    </div>;
  };

  const handleUser = (user: User) => {
    setActiveUser(user);
  };
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center text-center border overflow-y-auto'>
      <div className='lg:h-auto lg:border-r border-gray-300 overflow-y-auto '>
        <div className='flex items-center justify-between p-3 border-b border-gray-300 overflow-y-auto'>
          <span className='flex items-center gap-3 font-bold text-xl'>
            <HiChatAlt /> Chats
          </span>
          <span className='cursor-pointer text-lg'>
            <PiDotsThreeOutlineVerticalFill />
          </span>
        </div>
        <div className='w-full p-3'>
          <Searchbar onSearch={handleSearch} />
        </div>
        {userData.map((user) => (
          <button
            type='button'
            id={user.key}
            className='w-full flex items-center p-2 hover:border-y hover:shadow-lg gap-5 hover:bg-gray-900 cursor-pointer group'
            aria-label='Users'
            onClick={() => handleUser(user)}
          >
            <span className='p-5 border border-lime-500 rounded-full'>
              {user.icons}
            </span>
            <div className='flex items-center justify-between w-full'>
              <p className='text-md'>{user.name}</p>
              <span className='cursor-pointer text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <PiDotsThreeOutlineVerticalFill />
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className='lg:flex items-start justify-center border-x min-h-full'>
        <div className='w-full'>
          {activeUser && (
            <div
              id={activeUser.key}
              className='flex items-center p-2 gap-5 border-b cursor-pointer group'
            >
              <span className='p-4 border border-lime-500 rounded-full'>
                {activeUser.icons}
              </span>
              <div className='flex items-center justify-between w-full'>
                <p className='text-md'>{activeUser.name}</p>
                <button
                  type='button'
                  className='cursor-pointer text-lg'
                  onClick={handleOptions}
                  aria-label='More options'
                >
                  <PiDotsThreeOutlineVerticalFill />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
