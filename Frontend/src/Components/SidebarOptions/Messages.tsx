import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Searchbar from "../Searchbar";
import { HiChatAlt } from "react-icons/hi";
import { useState } from "react";
import { FaCameraRetro } from "react-icons/fa6";
import { IoIosSend, IoMdAttach } from "react-icons/io";

interface User {
  key: string;
  name: string;
  icons: string;
}

interface MessagesProps {
  sidebarVisible: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Messages: React.FC<MessagesProps> = ({ sidebarVisible }) => {
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
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 text-center border overflow-y-scroll`}
    >
      <div
        className={`grid-item left-column lg:h-auto lg:border-r overflow-y-auto min-h-full transition-all duration-300`}
      >
        <div className='flex items-center justify-between p-3 overflow-y-auto'>
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
            key={user.key}
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

      {activeUser ? (
        <div
          key={activeUser.key}
          className={`lg:flex flex-col items-center justify-center min-h-full transition-all duration-300`}
        >
          <div className='w-full flex-auto'>
            <div
              id={activeUser.key}
              className='flex items-center py-2 px-5 marker:gap-5 border-b cursor-pointer group'
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
          </div>
          <div className='flex flex-col h-full items-center justify-center text-center'>
            <img
              src='/no-message.png'
              alt='No message'
              className='w-[250px] mr-10'
            />
            <span className='text-gray-300 font-normal text-2xl'>
              No messages yet
            </span>
            <p className='my-3 font-sans '>
              Looks like you haven't initiated a conversation with your friend
            </p>
          </div>
          <div className='flex items-center justify-center w-full border-t  p-3 gap-3 '>
            <span>
              <FaCameraRetro className='cursor-pointer w-[20px] h-[20px]' />
            </span>
            <span>
              <IoMdAttach className='cursor-pointer w-[20px] h-[20px]' />
            </span>
            <input
              type='text'
              name='message'
              id='message'
              aria-label='message'
              placeholder=' Write your message here...'
              className='w-full bg-transparent border p-1 rounded-xl font-extralight'
            />
            <span>
              <IoIosSend className='cursor-pointer w-[20px] h-[20px]' />
            </span>
          </div>
        </div>
      ) : (
        <div className='flex flex-col h-full items-center justify-center text-center gap-3'>
          <span className='text-gray-300 font-normal text-2xl'>
            No messages yet !
          </span>
          <p className='font-sans'>
            Looks like you haven't received any messages.
          </p>
          <button className='my-5 font-sans border border-lttorq rounded-full px-5 py-2 cursor-pointer '>
            We will notify you 🔔
          </button>
        </div>
      )}
    </div>
  );
};

export default Messages;
