// Addfriend.tsx
import { useEffect, useState } from "react";
import { RootState } from "../Store/store";
import { selectSession } from "../Store/Slices/authSlice";
import { useSelector } from "react-redux";

interface AddfriendProps {
  uid: string;
}

const Addfriend = ({ uid }: AddfriendProps) => {
  const session = useSelector((state: RootState) => selectSession(state));
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const addfriend = async () => {
    setLoading(true)
    try {
      const id2 = session?.user.id;
      const response = await fetch("https://skillhub-584r.onrender.com/api/friendrequest", {
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
      setMessage(data.message); // Update local state immediately
      console.log("Message after update:", message); // Log the message after the update
    } catch (error) {
      console.error("Error handling request:", error);
    }
    finally{
      setLoading(false)
    }
  };

  const removefrined = async () => {
    setLoading(true)
    try {
      const id2 = session?.user.id;
      const response = await fetch("https://skillhub-584r.onrender.com/api/removerequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reqsender: id2,
          reqreciver: uid,
        }),
      });

      console.log(response)
    } catch (error) {
      console.error("Error handling request:", error);
    }
    finally{
      setLoading(false)
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id2 = session?.user.id;
        const response = await fetch(`https://skillhub-584r.onrender.com/api/check?reqsender=${id2}&reqreciver=${uid}`);

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
        } else {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [addfriend,removefrined]);


  if (loading) {
    return <div><h1 className="text-richtextdark text-2xl">sending..</h1></div>;
  } else if (message === 'Add Friend') {
    return (
      <div className="">
        <button
          className="p-2 bg-richtextdark text-textdark rounded-xl hover:scale-110 ml-5"
          onClick={addfriend}
        >
          Addfriend
        </button>
      </div>
    );
  } else if (message === 'Pending') {
    return (
      <div className="">
        <button
          className="p-2 bg-richtextdark text-textdark rounded-xl hover:scale-110 ml-5"
          onClick={removefrined}
        >
          req pending..,click to revoke 
        </button>
      </div>
    );
  } else if (message === 'Friends') {
    return (
      <div className="">
        <button
          className="p-2 bg-richtextdark text-textdark rounded-xl hover:scale-110 ml-5"
          onClick={removefrined}
        >
          remove friend
        </button>
      </div>
    );
  } else {
    return (
      <div className="">
        
      </div>
    );
  }
};

export default Addfriend;
