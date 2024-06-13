import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { selectSession } from "../Store/Slices/authSlice";
import { useEffect, useState } from "react";

type ongoingdata = {
  id: string;
  sender_id: string;
  receiver_id: string;
  desired_skills: string[];
  accepted: boolean;
  offermessage: string;
  receivername: string;
  sendername: string;
};

const OngoingExc = () => {
  const session = useSelector((state: RootState) => selectSession(state));
  const [ongoingData, setdata] = useState<ongoingdata[]>([]);

  const id = session?.user.id;

  //defining the endpoint
  const getongoingexc = async () => {
    const response = fetch(
      `http://localhost:5171/api/getongoingexchanges/${id}/`
    );
    const data = (await response).json();
    setdata(await data);
  };

  useEffect(() => {
    getongoingexc();
  }, []);

  return (
    <div className="min-h-screen w-screen mt-5 rounded-xl border border-green-600 flex justify-center items-center">
      {ongoingData &&
        ongoingData.map((e) => (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl text-green-600 text-center font-semibold">{e.sendername}</h1>
            <h1 className="text-xl text-green-600 text-center font-semibold">{e.receivername}</h1>
            <h1 className="text-xl text-green-600 text-center font-semibold">{e.offermessage}</h1>
            <h1 className="text-xl text-green-600 text-center font-semibold">
              {e.desired_skills.map((skill) => (
                <h1>{skill}</h1>
              ))}
            </h1>

          </div>
        ))}
    </div>
  );
};

export default OngoingExc;
