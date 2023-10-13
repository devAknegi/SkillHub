import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { HiOutlineSearch, HiChatAlt } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { selectSession } from "../Store/Slices/authSlice";

type UserData =
  | {
      id?: string;
      name?: string;
      bio?: string;
      skills?: string[];
      email?: string;
      Expertise?: string[];
      phone_number?: string;
      username?: string;
    }[]
  | [];

function Header() {
  const [loading, setLoading] = useState(false);

  const session = useSelector((state: RootState) => selectSession(state));

  const [pendingreq, setprendingreq] = useState<UserData>([]);
  
  const id = session?.user.id;

  const removefriend = async (uid: string) => {
    setLoading(true);
    try {
      const id2 = session?.user.id;
      const response = await fetch("http://localhost:5171/api/removerequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reqsender: uid,
          reqreciver: id2,
        }),
      });

      console.log(response);
    } catch (error) {
      console.error("Error handling request:", error);
    } finally {
      setLoading(false);
    }
  };

  const acceptfriend = async (uid: string) => {
    setLoading(true);
    try {
      const id2 = session?.user.id;
      const response = await fetch("http://localhost:5171/api/acceptrequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reqsender: uid,
          reqreciver: id2,
        }),
      });

      console.log(response);
    } catch (error) {
      console.error("Error handling request:", error);
    } finally {
      setLoading(false);
    }
  };

  const seenotifications = async () => {
    try {
      const response = await fetch(
        `http://localhost:5171/api/getpendingreq/${id}`
      );
      const data = await response.json();
  
      // Use the functional form of setprendingreq to avoid dependency on the previous state
      setprendingreq((prevProfiles) => {
        // Only update if there's a change in profiles to avoid unnecessary re-renders
        if (JSON.stringify(prevProfiles) !== JSON.stringify(data.profiles)) {
          return data.profiles;
        }
        return prevProfiles;
      });
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };
  


  useEffect(() => {
    seenotifications();
  }, [removefriend,acceptfriend]);


  const navigate = useNavigate();
  return (
    <div className="bg-bgdark h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is the messages panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                onClick={seenotifications}
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <MdOutlineNotificationsActive fontSize={24} />{" "}
                {pendingreq ? pendingreq.length : 0}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-3.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5  ">
                    <strong className="text-gray-700 font-medium">
                      bitBuddy Requests
                    </strong>
                    <div className="mt-3 text-sm flex flex-col gap-3">
                      {pendingreq && pendingreq.length > 0 ? (
                        pendingreq.map((e) => (
                          <div
                            key={e.id}
                            className="border border-border rounded-xl "
                          >
                            <div className="flex p-2 gap-2 ">
                              <h1 className="capitalize">{e.name}</h1>
                              <h1 className="text-richtextdark hover:underline hover:cursor-pointer">
                                {e.username}
                              </h1>
                            </div>
                            <div className="flex p-2 justify-around">
                              <button
                                className="border hover:border-green-400 hover:border p-2 rounded-xl text-green-400"
                                onClick={() => {
                                  acceptfriend(e.id!);
                                }}
                              >
                                {" "}
                                {loading ? "laoding" : "add"}{" "}
                              </button>
                              <button
                                className="border hover:border-red-700  hover:border p-2 rounded-xl text-red-700"
                                onClick={() => {
                                  removefriend(e.id!);
                                }}
                              >
                                {" "}
                                {loading ? "laoding" : "remove"}{" "}
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <h1>no bitbuddy requests</h1>
                      )}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60")',
                }}
              >
                <span className="sr-only"></span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/dashboard")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Sign out
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
export default Header;
