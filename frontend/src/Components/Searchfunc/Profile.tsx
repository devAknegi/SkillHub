import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Addfriend from "./Addfriend";

type UserData = {
  id?: string;
  name?: string;
  bio?: string;
  skills?: string[];
  email?: string;
  Expertise?: string[];
  phone_number?: string;
  username?: string;
  // Add other properties as needed
};

const Profile = () => {
  const [userData, setUserData] = useState<UserData>({});
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5171/api/user/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-5 overflow-y-scroll h-[90vh]">
      {userData && (
        <div className="flex gap-5 flex-col">
          <div className="flex gap-4 items-baseline">
            <p className="text-textdark text-7xl font-bold ">
              {userData.name}{" "}
            </p>
            <p className="text-4xl text-textdark">
              Originally known as{" "}
              <span className="text-richtextdark">{userData.username}</span>
            </p>
          </div>
          <div className="border border-border  p-4 flex gap-3 items-center rounded-full ">
            <span className="text-4xl text-textdark ">Experties</span>
            {userData.Expertise &&
              userData.Expertise.map((expertise) => (
                <span key={expertise} className="flex bg-richtextdark p-2 rounded-lg text-textdark ">{expertise}</span>
              ))}
          </div>
          <p className="border border-border p-4 rounded-xl text-xl w-fit  mt text-textdark">
            {userData.bio}
          </p>
          <Addfriend uid={userData.id!}/>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col flex-1 gap-5">
              <div className="p-4 border rounded-xl flex flex-col gap-5">
                <h1 className="text-textdark text-2xl font-bold">contacts</h1>
                <p className="text-richtextdark text-xl border border-border rounded-xl p-2 pl-1 ">
                  <span className="font-semibold text-textdark">Email:</span>{" "}
                  {userData.email}
                </p>
                <p className="text-richtextdark text-xl border border-border rounded-xl p-2 pl-1 ">
                  <span className="font-semibold text-textdark">Phone:</span>{" "}
                  {userData.phone_number}
                </p>
              </div>

              <div className="p-4 border rounded-xl flex flex-col gap-5 w-fit">
                <span className="text-textdark text-2xl font-bold">
                  Skills:
                </span>{" "}
                <div className=" gap-3 flex flex-col w-fit">
                  {userData.skills &&
                    userData.skills.map((skill) => (
                      <span
                        key={skill}
                        className=" text-xl text-textdark m-3 capitalize"
                      >
                        {" "}
                        - {skill} <br />{" "}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center border rounded-xl">
              <h1 className="text-textdark">profile here and activity here </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
