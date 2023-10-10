import { toast } from "sonner";

import { useRef } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { setSession, selectSession } from "../Store/features/authSlice";
import { Link } from "react-router-dom";

const url: string = import.meta.env.VITE_URL;
const anon: string = import.meta.env.VITE_KEY;

const Nav = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newemail, createEmail] = useState("");
  const [newpassword, createPassword] = useState("");
  const [uname, createuname] = useState("");
  const [phone, updatephone] = useState("");

  const dispatch = useDispatch();

  const supabase: SupabaseClient = createClient(url, anon);

  const handleSignup = async () => {
    try {
      const { error } = await supabase.auth.signUp({
        email: newemail,
        password: newpassword,
        options: {
          data: { username: uname, phone },
        },
      });
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Check you email for verification!!!");
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };
  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
      } else {
        const session = data?.session;
        dispatch(setSession(session));
        toast.success("logged-in Sucessfully 🎉");
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error(error.message);
      } else {
        dispatch(setSession(null));
        toast.success("Visit again 🫠");
      }
    } catch (error) {
      toast.error("something went wrong");
      console.error("Unexpected error:", error);
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          toast.error(error.message);
        } else {
          const userSession = data?.session ?? null;
          dispatch(setSession(userSession));
        }
      } catch (error) {
        toast.error("something went wrong!");
        console.error("Unexpected error:", error);
      }
    };

    fetchSession();
  }, []);

  const sessionData = useSelector(selectSession);

  const eleRef = useRef<HTMLDivElement>(null);
  const ele2Ref = useRef<HTMLDivElement>(null);

  const formhandler = () => {
    if (eleRef.current && ele2Ref.current) {
      eleRef.current.style.top = eleRef.current.style.top === "70px" ? "-4000px" : "70px";
      ele2Ref.current.style.top = "-4000px";
    }
  };

  const signupformhandler = () => {
    if (eleRef.current && ele2Ref.current) {
      ele2Ref.current.style.top = ele2Ref.current.style.top === "70px" ? "-4000px" : "70px";
      eleRef.current.style.top = '-4000px';
    }
  };

  return (
    <div className="border-border border-solid border-b-[0.5px] sticky top-0 left-0 right-0 z-50 h-[4rem] bg-transparent backdrop-blur-sm ">
      <div className="navbar h-full w-[80%] pl-4 pr-4 mr-auto ml-auto flex justify-between items-center">
        <div className="flex gap-4">
          <div className="img p-2 h-full w-fit flex gap-1 items-center ">
            <img src="/logo.png" alt="scg" className="h-full w-14" />
            <h1 className="text-textdark text-2xl">SkillHub</h1>
          </div>
          { sessionData?.access_token &&
          <div className="links flex items-center">
            {/* all the links will appear here below is the example how to use navigation  */}
            {/* <Link to={"/connect"} className="text-textdark underline ">Connect</Link> */}
          </div>
          }

        </div>

        <div className="logoutinfo relative w-fit ">
          {sessionData?.access_token ? (
            <div className="relative flex w-fit gap-2 items-center">
              <Link to={"/dashboard"}>
              <div className="profile  bg-white  w-12 h-12 flex justify-center items-center rounded-full m-0"></div>
              </Link>
              <button
                className="bg-transparent p-3 hover:bg-richtextdark rounded-xl transition-all duration-200 text-textdark border border-solid border-richtextdark"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 relative transition-all duration-400">
              <div
                ref={eleRef}
                id="loginform"
                className=" transition-all duration-700 w-[20vw] h-[40vh] opacity-95 bg-transparent backdrop-blur-sm border border-solid border-border top-[-4000px] absolute"
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="flex items-center pt-5 flex-col gap-10 h-full"
                >
                  <input
                    type="text"
                    id="username"
                    name="password"
                    required
                    placeholder="Enter the email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-sm text-center w-[80%] h-[15%] outline-richtextdark "
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-sm text-center w-[80%] h-[15%] outline-richtextdark "
                  />
                  <button
                    className="bg-richtextdark p-3 hover:bg-hover rounded-xl transition-all duration-200 text-textdark"
                    onClick={handleSignIn}
                  >
                    Login
                  </button>
                </form>
              </div>
              <div
                ref={ele2Ref}
                id="signupform"
                className=" transition-all duration-700 w-[20vw] h-[60vh] opacity-95 pb-4 bg-transparent backdrop-blur-sm border border-solid border-border top-[-4000px] absolute"
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="flex items-center pt-5 flex-col gap-10 h-full"
                >
                  <input
                    type="text"
                    id="username"
                    name="password"
                    required
                    placeholder="Enter the email"
                    onChange={(e) => createEmail(e.target.value)}
                    className="rounded-sm text-center w-[80%] h-[15%] outline-richtextdark text-xl"
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Enter your password"
                    onChange={(e) => createPassword(e.target.value)}
                    className="rounded-sm text-center w-[80%] h-[15%] outline-richtextdark text-xl "
                  />

                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    placeholder="Enter a unique username"
                    onChange={(e) => createuname(e.target.value)}
                    className="rounded-sm text-center w-[80%] h-[15%] outline-richtextdark text-lg "
                  />

                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Mobile-number(optional)"
                    onChange={(e) => updatephone(e.target.value)}
                    className="rounded-sm text-center w-[80%] h-[15%] outline-richtextdark "
                  />
                  <button
                    className="bg-richtextdark p-3 hover:bg-hover rounded-xl transition-all duration-200 text-textdark"
                    onClick={handleSignup}
                  >
                    Verify!
                  </button>
                </form>
              </div>

              <button
                className="bg-transparent p-3 hover:bg-richtextdark rounded-xl transition-all duration-200 text-textdark border border-solid border-richtextdark"
                onClick={signupformhandler}
              >
                Sign-up
              </button>
              <button
                className="bg-richtextdark p-3 hover:bg-hover rounded-xl transition-all duration-200 text-textdark"
                onClick={formhandler}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;