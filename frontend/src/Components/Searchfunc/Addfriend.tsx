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
      const response = await fetch("http://localhost:5171/api/removerequest", {
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
        const response = await fetch(`http://localhost:5171/api/check?reqsender=${id2}&reqreciver=${uid}`);

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
          className="p-2 border border-richtextdark hover:bg-richtextdark text-textdark rounded-xl font-bold capitalize"
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
          className="p-2 border border-red-600 text-textdark rounded-xl font-bold capitalize"
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
          className="p-2 border border-red-600 hover:bg-red-600 text-textdark rounded-xl font-bold capitalize"
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
