import { FaRectangleList, FaStore, FaUserAstronaut } from "react-icons/fa6";
import { TbCategory, TbMessage, TbPasswordUser } from "react-icons/tb";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const features = [
  {
    key: "feat1",
    title: "SkillHub Profiles",
    about:
      "Users can create profiles showcasing their skills, expertise, and the services they can offer.",
    icon: <FaUserAstronaut />,
  },
  {
    key: "feat2",
    title: "Skill Listings",
    about:
      "Individuals can post listings for the skills they are looking to acquire or the services they need.",
    icon: <FaRectangleList />,
  },
  {
    key: "feat3",
    title: "Messaging",
    about:
      "System to facilitate communication between users for arranging skill exchanges.",
    icon: <TbMessage />,
  },
  {
    key: "feat4",
    title: "Skill Categories",
    about:
      "Categorize skills into different categories (e.g., programming design, language implementation) for easier navigation.",
    icon: <TbCategory />,
  },
  {
    key: "feat5",
    title: "Rating and Reviews",
    about:
      "We allow users to rate and review each other based on their experiences with the skill exchange.",
    icon: <TbPasswordUser />,
  },
  {
    key: "feat6",
    title: "SkillSwap Marketplace",
    about:
      "A place where users can offer and exchange physical goods or services in addition to skills.",
    icon: <FaStore />,
  },
];

const FeaturePage = () => {
  return (
    <section>
      <div className='mx-20 flex flex-col items-center'>
        <h1 className='text-3xl border-b border-blue-600 px-10 py-5'>
          Features We Offer{" "}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 items-center justify-center min-h-screen xl:text-left text-center mt-10 md:mt-0'>
          {features.map((feature) => (
            <div
              key={feature.key}
              className='flex flex-col items-center md:items-left justify-center space-y-5 border max-w-[420px] min-h-[250px] px-3 hover:border-ltpink transition duration-200 cursor-pointer rounded-xl'
            >
              <div className='flex flex-col gap-2 items-center text-xl'>
                <span className='text-3xl border p-3 rounded-full border-ltblue'>
                  {feature.icon}{" "}
                </span>
                <span className=' text-ltorange'>{feature.title}</span>
              </div>

              <div>{feature.about}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full bg-slate-200 text-black gap-10 p-10 mb-20'>
        <h1 className='text-4xl font-semibold text-dkblue'>
          <span className='text-pink-700'>Start enhancing</span> skills with
          SkillHub🚀
        </h1>
        <p className='text-xl font-normal'>
          Our free plan has everything you need. Just show your Skills!{" "}
        </p>
        <Link to="/app/dashboard" className='px-5 py-2 mx-5 rounded-xl border border-pink-700 bg-pink-400 text-black font-medium hover:shadow-[0_0_10px_rgba(192,7,130,0.9)] hover:bg-pink-500'>
          Get Started for free
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default FeaturePage;
