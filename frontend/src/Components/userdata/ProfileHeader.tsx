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
              <img className="block rounded-full mx-20" src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=130&h=130" alt="Profile" />
            </div>

            <div className="flex items-center  ">
              <p className="text-2xl font-semibold mx-10 pl-20">Ankush Negi</p>
              <div className=" mx-20 pl-20">
                <Link
                  to={'/dashboard/editProfile'}
                  className="bg-transparent cursor-pointer font-semibold  text-base leading-8 border-2 border-green-600 text-green-600 rounded-md px-6 py-2  hover:bg-green-600 hover:text-black hover:no-underline hover:border-green-600"
                >
                  Edit Profile
                </Link>
              </div>

            </div>

            <div className="float-left font-semibold ml-10">
              <ul className="flex items-center mt-6">
                <span className="text-lg pr-3"> 100 </span>
                <li className="inline-block text-lg text-richtextdark mr-10 cursor-pointer">
                  Followers
                </li>
                <span className="text-lg pr-3">100 </span>
                <li className="inline-block text-lg text-richtextdark cursor-pointer">
                  Following
                </li>
              </ul>
            </div>
            <div className="float-left text-base font-normal mt-6 ml-10 border-b">
              <p>
                <span className="font-semibold"></span>
                “It is not how much we have, but how much we enjoy that makes happiness” – By Charles Spurgeon.
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default ProfileHeader;
