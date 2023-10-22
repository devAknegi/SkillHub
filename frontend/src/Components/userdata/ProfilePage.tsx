import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

const ProfilePage = () => {
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
    <div className="bg-black text-richtextdark min-h-screen flex">
      {userData && (
        <div className="flex-1 p-8">
          <section className="mt-8">
            <h3 className="text-xl font-bold mb-2 underline">About you</h3>
            <p>{userData.bio}</p>
          </section>
          
          <section className="mt-8">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone_number}</p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p> School: </p>
            <p> College: </p>
          </section>
          
          <section className="mt-8">
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <ul>
              {
                userData.skills?.map((skill, index) => (
                  <li key={index} className="list-disc ml-4">
                    {" "}
                    {skill}
                    {" "}
                  </li>
                ))
              }
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold mb-2">Projects</h3>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold mb-2">Work Experience</h3>
          </section>

        </div>
      )}

    </div>
  );
};

export default ProfilePage;
