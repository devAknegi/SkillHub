import { CgCPlusPlus } from "react-icons/cg";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5, FaJava, FaPython } from "react-icons/fa6";
import { MdJavascript } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const skills = [
  {
    key: "1",
    name: "C++",
    level: "Intermediate",
    icon: <CgCPlusPlus />,
  },
  {
    key: "2",
    name: "Python",
    level: "Intermediate",
    icon: <FaPython />,
  },
  {
    key: "3",
    name: "Java",
    level: "Intermediate",
    icon: <FaJava />,
  },
  {
    key: "4",
    name: "HTML5",
    level: "Intermediate",
    icon: <FaHtml5 />,
  },
  {
    key: "5",
    name: "CSS3",
    level: "Intermediate",
    icon: <FaCss3 />,
  },
  {
    key: "6",
    name: "JavaScript",
    level: "Intermediate",
    icon: <MdJavascript />,
  },
];
const Dashboard = () => {
  const handleOptions = () => {
    <div className='w-10 h-10 border p-2 flex items-center justify-center flex-col'>
      <div className='text-md font-normal'>Edit Profile</div>
      <div className='text-md font-normal'>Settings</div>
    </div>;
  };
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='bg-white px-5 text-dkblue'>My Profile</div>

      <div className='flex items-center justify-center gap-3 w-full min-h-full p-5'>
        <img
          src='/pfp.jpg'
          alt='pfp'
          className='w-[100px] h-[100px] rounded-full'
        />
        <div className='flex items-center justify-between w-full'>
          <div>
            <h1 className=''>Name</h1>
            <p className='text-gray-400'>@username</p>
          </div>
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

      <div className='bg-white px-5 text-dkblue'>Skills</div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 my-10 py-10  min-w-full min-h-full'>
        {skills.map((skill) => (
          <div
            key={skill.key}
            className='flex flex-col items-center md:items-left justify-center border min-w-[100px] min-h-[150px] mx-20 hover:border-lttorq transition duration-200 cursor-pointer rounded-xl'
          >
            <div className='flex flex-col gap-2 items-center text-xl'>
              <span className='text-3xl border p-3 rounded-full border-ltpink'>
                {skill.icon}
              </span>
              <span className=' text-ltorange'>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-white m-5 text-dkblue'>Activity</div>
      <div className='bg-white m-5 text-dkblue'>Others</div>
    </div>
  );
};

export default Dashboard;
