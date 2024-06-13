// Addfriend.tsx
import {useState } from "react";
import { RootState } from "../Store/store";
import { selectSession } from "../Store/Slices/authSlice";
import { useSelector } from "react-redux";
import { toast } from "sonner";

interface ExchanhebuttonProps {
  udata: {
    id?: string;
    name?: string;
    bio?: string;
    skills?: string[];
    email?: string;
    Expertise?: string[];
    phone_number?: string;
    username?: string;
  };
}

export const Exchangebutton = ({ udata }: ExchanhebuttonProps) => {
  const session = useSelector((state: RootState) => selectSession(state));
  const id = session?.user.id;
  const sendername = session?.user.user_metadata.username
  const [modal, openmodal] = useState(false);
  const [desiredSkills, setdesiredSkills] = useState<string[]>([]);
  const [message, setmessage] = useState<string>("");
  const [loading, setloading] = useState(false);
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skill = e.target.value;
    setdesiredSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleInitiateSkillExchange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (desiredSkills.length === 0) {
      toast.error(
        "Please select at least one skill before initiating the skill exchange."
      );
      return;
    }

    if (message.length === 0) {
      toast.error("Please enter the message");
      return;
    }
    try {
      setloading(true)
      const data = fetch("http://localhost:5171/api/storeexchange", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender_id: id,
          sendername,
          receiver_id: udata.id,
          desired_skills: desiredSkills,
          message: message,
          receivername:udata.username,
        }),
      });

      setloading(false);

      const status = (await data).ok
      if(status)
      toast.message("sent sucessfully")
      else
      toast.error("error during sending req")
    } catch (error) {
      setloading(false)
      toast.error("something went wrong check the fetch method")
    }
  };

  return (
    <div className="relative">
      <button
        className="p-2 border border-richtextdark text-textdark rounded-xl hover:bg-richtextdark font-bold"
        onClick={() => openmodal(!modal)}
      >
        Initiate SkillExchange
      </button>
      {modal && (
        <form
          className="modal absolute p-4 rounded-xl w-[300%] mt-5 flex flex-col border backdrop-blur-sm gap-5 border-richtextdark "
          onSubmit={handleInitiateSkillExchange}
        >
          <div className="flex gap-5">
            <div className="text-textdark flex flex-col gap-2 text-xl border border-richtextdark rounded-xl p-2 bg-bgdark">
              Select_Desired_Skills:
              {udata.skills &&
                udata.skills?.map((e, index) => (
                  <div className="flex gap-5">
                    <input
                      name={`skill${index}`}
                      type="checkbox"
                      value={e}
                      checked={desiredSkills.includes(e)}
                      onChange={handleSkillChange}
                      className="w-4"
                    />

                    <label htmlFor={`skill${index}`} className="capitalize">
                      {e}
                    </label>
                  </div>
                ))}
            </div>
            <div className="border border-richtextdark w-full rounded-xl bg-bgdark">
              <textarea
                className="bg-transparent w-full h-full outline-none p-2 text-xl text-textdark"
                placeholder="Enter a message describing what you can provide in exchange."
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="w-full p-2  flex justify-end">
            <button
              type="submit"
              className="border hover:bg-richtextdark border-richtextdark p-2 rounded-xl text-textdark font-bold transition-colors ease-in-out duration-200"
            >
              {loading ? "sending.." : "Send"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
