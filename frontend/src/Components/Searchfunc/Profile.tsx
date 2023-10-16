import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Addfriend from "./Addfriend";
import {Exchangebutton} from "./Exchangebutton";

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

const Profile = () => {
  const [userData, setUserData] = useState<UserData>({});
  const { id } = useParams();
  const [loading,setloading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const response = await fetch(`http://localhost:5171/api/user/${id}`);
        const data = await response.json();
        setUserData(data);
        setloading(false)
      } catch (error) {
        setloading(false)
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  return (
  <div className="p-5 overflow-y-scroll h-[90vh]">
  {userData && loading?(
  <div className="w-full h-full flex justify-center items-center">
    <img src="/loading.svg" alt="" />
  </div>
  
  ) :(
    <div className="flex relative flex-col gap-5">
      <div className="flex gap-4 items-baseline">
        <p className="text-4xl font-bold text-textdark">{userData.name}</p>
        <p className="text-xl text-textdark">Originally known as <span className="text-richtextdark">{userData.username}</span></p>
      </div>
      
      <div className="border border-border p-4 flex gap-3 items-center rounded-full">
        <span className="text-xl font-bold text-textdark">Expertise</span>
        {userData.Expertise &&
          userData.Expertise.map((expertise) => (
            <span key={expertise} className="flex bg-richtextdark p-2 rounded-lg text-textdark">{expertise}</span>
          ))}
      </div>

      <p className="border border-border p-4 rounded-xl text-xl text-textdark my-4">
        {userData.bio}
      </p>
      
      <div className="flex gap-10 p-2">
        
      <Exchangebutton udata={userData} />
      <Addfriend uid={userData.id!} />
      </div>
      
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <div className="p-4 border rounded-xl flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-textdark">Contacts</h1>
            <p className="text-xl border border-border rounded-xl p-2 pl-1 text-richtextdark">
              <span className="font-semibold text-textdark">Email:</span> {userData.email}
            </p>
            <p className="text-xl border border-border rounded-xl p-2 pl-1 text-richtextdark">
              <span className="font-semibold text-textdark">Phone:</span> {userData.phone_number}
            </p>
          </div>

          <div className="p-4 border rounded-xl flex flex-col gap-5 w-fit">
            <span className="text-2xl font-bold text-textdark">Skills:</span>
            <div className="gap-3 flex flex-col w-fit">
              {userData.skills &&
                userData.skills.map((skill) => (
                  <span key={skill} className="text-xl text-textdark m-3 capitalize">
                    - {skill} <br />
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center border rounded-xl">
          <h1 className="text-textdark">Profile and Activity Here</h1>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default Profile;
