import { useDispatch, useSelector } from "react-redux";
import { selectSession } from "../../Store/features/authSlice";
import { useEffect, useState } from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

const url: string = import.meta.env.VITE_URL;
const anon: string = import.meta.env.VITE_KEY;



const Addfriend = ({ uid }: { uid: string }) => {
  const [freqdata, setdata] = useState({});
  const [message, setmessage] = useState("")

  
  const supabase: SupabaseClient = createClient(url, anon);



  useEffect(() => {
    const fetchdata = async () => {
      try {
        const id2 = (await supabase.auth.getSession()).data.session?.user.id

        const response = await fetch(`http://localhost:5171/api/check?reqsender=${id2}&reqreciver=${uid}`);

        if (response.ok) {
          const data = await response.json();
          setmessage(data.message);
        } else {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, [uid]);

  const handelrequest = async () => {
    
    const id2 = (await supabase.auth.getSession()).data.session?.user.id
    const response = await fetch("http://localhost:5171/api/friendrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reqsender: id2,
        reqreciver: uid,
      }),
    });

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }

    const data = await response.json();
    setdata(data);
  };

  console.log(freqdata);

  return (
    <div className="">
      <button
        className="p-2 bg-richtextdark text-textdark rounded-xl hover:scale-110 ml-5"
        onClick={handelrequest}
      >
        {message}
      </button>
    </div>
  );
};

export default Addfriend;
