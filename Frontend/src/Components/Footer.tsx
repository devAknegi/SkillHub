import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const footerContent = [
  {
    title: "Features",
    items: [
      "SkillHub Profiles",
      "Skill Listings",
      "Messaging",
      "Skill Categories",
      "Rating and Reviews",
      "SkillSwap Marketplace",
      "See more features...",
    ],
  },
  {
    title: "Explore",
    items: ["Marketplace", "Design ideas", "Blog", "Apps"],
  },
  {
    title: "Community",
    items: [
      "Online communities",
      "Developers",
      "Partnerships",
      "Affiliates programme",
    ],
  },
  {
    title: "Download",
    items: ["iOS", "Android", "Windows", "Mac"],
  },
  {
    title: "Company",
    items: [
      "About",
      "Newsroom",
      "Careers",
      "Trust Centre",
      "Security",
      "Terms and Privacy",
    ],
  },
];

const Footer = () => {
  return (
    <footer className='w-full border-t py-10 text-white'>
      <div className='container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8'>
        {footerContent.slice(0, 4).map((section, index) => (
          <div key={index}>
            <h3 className='text-lg font-semibold mb-4'>{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li className='mb-2' key={idx}>
                  <Link to='#' className='hover:underline'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className='col-span-2 md:col-span-4 mt-8'>
          <h3 className='text-lg font-semibold mb-4'>
            {footerContent[4].title}
          </h3>
          <ul className='flex flex-wrap gap-4'>
            {footerContent[4].items.map((item, idx) => (
              <li key={idx}>
                <Link to='#' className='hover:underline'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center'>
        <p>© 2024 All Rights Reserved, SkillHub®</p>
        <div className='flex space-x-4'>
          <Link to='#' className='text-ltblue hover:underline'>
            Privacy policy
          </Link>
          <Link to='#' className='text-ltblue hover:underline'>
            Terms
          </Link>
        </div>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          
          <Link to='#' className='hover:underline text-blue-600'>
            <FaDiscord />
          </Link>
          <Link to='#' className='hover:underline text-green-600'>
            <FaGithub />
          </Link>
          <Link to='#' className='hover:underline text-blue-400'>
            <FaTwitter />
          </Link>
          <Link to='#' className='hover:underline text-pink-600'>
            <FaInstagram />
          </Link>
          <Link to='#' className='hover:underline text-blue-700'>
            <FaFacebook />
          </Link>
          <Link to='#' className='hover:underline text-red-600'>
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
