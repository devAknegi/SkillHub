import { useState, useEffect } from "react";
import { selectSession } from "../Store/Slices/authSlice";
import { RootState } from "../Store/store";
import { useSelector } from "react-redux";
import io from "socket.io-client";

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

type Message = {
  id?: string;
  sender_id: string;
  receiver_id: string;
  message: string;
};

const Messaging = () => {
  const [friendslist, setFriendList] = useState<UserData[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null);
  const session = useSelector((state: RootState) => selectSession(state));
  const id = session?.user.id;
  const socket = io("http://localhost:3001");

  const fetchMessages = async (receiverId: string) => {
    try {
      const response = await fetch(
        `http://localhost:5171/api/getmessages/${id}/${receiverId}`
      );
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch(
          `http://localhost:5171/api/getacceptedreq/${id}`
        );
        const data = await response.json();
        setFriendList(data.profiles);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    const setupSocket = () => {
      socket.emit("join", id);

      socket.on("chat message", (msg: Message) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    };

    fetchFriends();
    setupSocket();

    if (selectedFriendId) {
      fetchMessages(selectedFriendId!);
    }

    return () => {
      socket.disconnect();
    };
  }, [id, selectedFriendId]);

  const sendMessage = (receiverId: string) => {
    const messageData = {
      senderId: id!,
      receiverId,
      message: newMessage,
    };

    socket.emit("chat message", messageData);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender_id: id!, receiver_id:receiverId, message: newMessage },
    ]);
    setNewMessage("");
  };
  return (
    <div
      className="bg-bgdark h-full w-full grid"
      style={{ gridTemplateColumns: "8fr 3fr" }}
    >
      <div
        className="border-r border-border grid "
        style={{ gridTemplateRows: "8fr 1fr" }}
      >
        {selectedFriendId && (
          <>
            <div className="flex flex-col overflow-y-scroll p-2 w-full gap-3 ">
              {messages.map((msg) => (
                <div key={msg.id} className="w-full relative px-5">
                  {id && msg.sender_id === id ? (
                    <p className=" rounded-xl p-3 left-0 bg-green-500 ml-auto relative w-fit">
                      {msg.message}
                    </p>
                  ) : (
                    <p className=" rounded-xl p-3 relative bg-lime-500 w-fit">
                      {msg.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex w-full h-full border-t border-border p-4 justify-center gap-10 items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="h-[80%] w-[70%] border-border border rounded-xl outline-none pl-2 text-textdark bg-transparent"
                placeholder="Write a message"
              />
              <button
                className="text-textdark bg-richtextdark h-[80%] rounded-xl w-[10%]"
                onClick={() => sendMessage(selectedFriendId!)}
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>

      <div className="">
        {friendslist.map((e) => (
          <div
            key={e.id}
            onClick={() => setSelectedFriendId(e.id!)}
            className="group flex gap-4 items-center px-1 hover:cursor-pointer"
          >
            <div className="text-2xl w-[20%] h-12 rounded-full bg-textdark"></div>
            <div className="border border-border w-full p-3 border-l-0 border-r-0 text-textdark">
              <h1>{e.name}</h1>
              <h2>{e.username}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messaging;
