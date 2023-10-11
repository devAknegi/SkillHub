import { cardData } from "../../api/carddata";
import "../../index.css"; //to implement grid coz tailwind sucks when it come to grid layouts
import { RiProfileLine, RiUser2Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type ProfileData = {
  id?: string;
  name?: string;
  bio?: string;
  skills?: string[];
  phone?: string;
  email?: string;
  username?: String;
  Experties?: String[];
};

const Mainserachpage = () => {
  const [users, setusers] = useState<ProfileData[]>([{}]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5171/api/users");
        const data = await response.json();
        setusers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainsearch grid h-screen w-screen">
      <div className="flex items-center justify-between p-5">
        <i className="text-4xl text-textdark">
          <RiProfileLine />
        </i>
        <h1 className="text-3xl text-textdark">Find your bitBuddies</h1>
      </div>
      <div className=" filters grid  border-t-2 border-border">
        <div className="filteritems grid grid-cols-3 grid-rows-3 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={"filtercards rounded-xl cursor-pointer hover:scale-110 transition-all duration-300 shadow-md border hover:border-richtextdark"}
            >
              <h1 className="text-textdark text-center">{card.title}</h1>
            </div>
          ))}
        </div>
        <div className="border-border border-t-1 border-l flex flex-col ">
          <h1 className="text-textdark text-center text-2xl border-b border-border p-4 ">
            bitBuddies Available
          </h1>
          <div className="users h-full overflow-y-scroll flex flex-col gap-2 p-5">
            {users.map((e) => (
              <Link to={`/findbitbuddies/${e.id}`}>
                <div className="singleprofile min-h-[3rem] items-center gap-2 flex p-2 border border-border hover:border-richtextdark rounded-xl hover:scale-[1.06] transition-all duration-200 group">
                  <div className="profile h-full flex justify-center items-center w-[20%] ">
                    <i className="text-4xl rounded-full text-textdark group-hover:text-richtextdark ">
                
                      <RiUser2Fill className="rounded-full" />
                    </i>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex gap-2">
                      <h1 className="text-textdark capitalize">{e.name}</h1>
                      <h1 className=" text-richtextdark lowercase">
                        @{e.username}
                      </h1>
                    </div>
                    <div className="">
                      <h1 className="text-textdark">Equipped with:</h1>
                      {e.skills!.map((skill, index) => (
                        <span key={index} className="text-textdark">
                          {skill}
                          {index !== e.skills!.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainserachpage;
