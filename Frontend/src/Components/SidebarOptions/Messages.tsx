import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Searchbar from "../Searchbar";
import { HiChatAlt } from "react-icons/hi";

const userData = [
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

const Messages = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
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
        <div className='w-full'>
          {userData.map((user) => (
            <div
              key={user.key}
              className='flex items-center p-2 hover:border-y hover:shadow-lg gap-5 hover:bg-gray-900 cursor-pointer group'
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
            </div>
          ))}
        </div>
      </div>
      <div className='lg:flex items-center justify-center border-x min-h-full'>
        Person's Chat Here
      </div>
    </div>
  );
};

export default Messages;
