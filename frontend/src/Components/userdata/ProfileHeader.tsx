import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

type UserData = {
  id?: string;
  name?: string;
  bio?: string;
  skills?: string[];
  email?: string;
  Expertise?: string[];
  phone_number?: string;
  username?: string;
  // followers?: string;
  // following?: string;
  // buddies?: string;
};

const ProfileHeader = () => {
  const [userData, setUserData] = useState<UserData>({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5171/api/user/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <header>
      <div className="mx-auto text-xs text-center flex items-center justify-center">
        {userData && (
          <div className="profile relative mt-10 text-white">
            <div className="profile-image">
              <img className="block rounded-full mx-20" src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="Profile" />
            </div>

            <div className="flex items-center ">
              <p className="text-2xl font-light mx-10 pl-20">{userData.name}</p>
              <Link
                to={'/dashboard/editProfile'}
                className="bg-transparent cursor-pointer font-semibold  text-base leading-8 border-2 border-green-600 text-green-600 rounded-md px-6  hover:bg-green-600 hover:text-black hover:no-underline hover:border-green-600"
              >
                Edit Profile
              </Link>
            </div>

            <div className="float-left font-semibold ml-10">
              <ul className="flex items-center mt-6">
                <li className="inline-block text-base leading-6 mr-10 cursor-pointer">
                  <span>{ userData.followers? userData.followers : 0}</span>  Followers
                </li>
                <li className="inline-block text-base leading-6 cursor-pointer">
                  <span> {userData.following ? userData.following :0} </span> Following
                </li>
              </ul>
            </div>
            <div className="float-left text-base font-normal mt-6 ml-10">
              <p>
                <span className="font-semibold"> {userData.name} </span> {userData.bio}.
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default ProfileHeader;
