import { toast } from "sonner";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { setSession, selectSession } from "../Store/features/authSlice";

const url: string = import.meta.env.VITE_URL;
const anon: string = import.meta.env.VITE_KEY;

const Nav = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const supabase: SupabaseClient = createClient(url, anon);

  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "guest@gmail.com",
        password: "12345678",
      });

      if (error) {
        toast.error(error.message);
      } else {
        const session = data?.session;
        dispatch(setSession(session));
        toast.success("logged-in Sucessfully 🎉")
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
        toast.success("Visit again 🫠")
      }
    } catch (error) {
      toast.error("something went wrong")
      console.error('Unexpected error:', error);
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
        toast.error("something went wrong!")
        console.error("Unexpected error:", error);
      }
    };

    fetchSession();
  }, []);

  const sessionData = useSelector(selectSession);

  return (
    <div className="border-border border-solid border-b-[0.5px] sticky top-0 left-0 right-0 z-50 h-[4rem] bg-transparent backdrop-blur-sm">
      <div className="navbar h-full w-[80%] pl-4 pr-4 mr-auto ml-auto flex justify-between items-center">
        <div>
          <div className="img p-2 h-full w-16 flex gap-1  items-center ">
            <img src="/logo.png" alt="scg" className="h-full w-full" />
            <h1 className="text-textdark text-2xl">SkillHub</h1>
          </div>
        </div>
        <div className="">
          { sessionData?.access_token?
          <div>
             <button
              className="bg-transparent p-3 hover:bg-richtextdark rounded-xl transition-all duration-200 text-textdark border border-solid border-richtextdark"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </div>:
          <div className="flex gap-3">
          <button
            className="bg-transparent p-3 hover:bg-richtextdark rounded-xl transition-all duration-200 text-textdark border border-solid border-richtextdark"
            disabled
            onClick={() => {
              toast.error("^^");
            }}
          >
            sign-up
          </button>
          <button
            className="bg-richtextdark p-3 hover:bg-hover rounded-xl transition-all duration-200 text-textdark"
            onClick={handleSignIn}>
            Login
          </button>
        </div>
          
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;
