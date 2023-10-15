import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { selectSession } from "../Store/Slices/authSlice";
import { toast } from "sonner";
import { useEffect, useState } from "react";

type Props = {};

type reqdata = {
  id: string;
  sender_id: string;
  receiver_id: string;
  desired_skills: string[];
  accepted: boolean;
  offermessage: string;
};
const Pendingreq = (props: Props) => {
  const session = useSelector((state: RootState) => selectSession(state));
  const [loading, setloading] = useState(false);
  const [reqData, setreqData] = useState<reqdata[]>([]);
  const id = session?.user.id;

  useEffect(() => {
    const getreq = async () => {
      try {
        setloading(true);
        const respone = await fetch(
          `http://localhost:5171/api/getexcrequests/${id}`
        );
        const data = await respone.json();
        if (data) {
          setreqData(data);
          setloading(false);
        } else {
          toast.error("unable to fetch data");
        }
      } catch (error) {
        toast.error("something went wrong");
        console.log(error);
        setloading(false);
      }
    };

    getreq();
  }, []);

  console.log(reqData);

  return (
    <div className="min-h-screen w-screen mt-5 rounded-xl border border-yellow-600 flex justify-center gap-5 items-center">
      {reqData &&
        reqData.map((e,index) => (
          <div className="border  border-yellow-600 rounded-xl p-4 text-richtextdark">
            <h1 className="text-yellow-600">request#{index+1}</h1>
            <h1>{e.id}</h1>
            <h2>{e.desired_skills}</h2>
            <p>{e.offermessage}</p>
          </div>
        ))}
    </div>
  );
};

export default Pendingreq;
