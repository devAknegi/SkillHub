import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { selectSession } from "../Store/Slices/authSlice";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type reqdata = {
  id: string;
  sender_id: string;
  receiver_id: string;
  desired_skills: string[];
  accepted: boolean;
  offermessage: string;
  receivername: string;
  sendername: string;
};
const Pendingreq = () => {
  const session = useSelector((state: RootState) => selectSession(state));
  const [loading, setloading] = useState(false);
  const [reqData, setreqData] = useState<reqdata[]>([]);
  const [reqrecivedData, setreqrecivedData] = useState<reqdata[]>([]);
  const id = session?.user.id;
  const [refresh,setrefresh] = useState(false);

  const handelaccept = async (sender_id:string,receiver_id:string)=>{
    try{
      const response = await fetch("http://localhost:5171/api/acceptreq",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          sender_id,
          receiver_id
        })
      }) 
      const message = await response.json()
      toast.message(message.msg)
      setrefresh(!refresh)
    }catch(error){
      toast.error("something went wrong");
    }
  }

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

    const getrecivedreq = async () => {
      try {
        setloading(true);
        const respone = await fetch(
          `http://localhost:5171/api/getexcreceivedreq/${id}`
        );
        const data = await respone.json();
        if (data) {
          setreqrecivedData(data);
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
    getrecivedreq();
  }, [refresh]);

  return (
    <div className="min-h-screen w-screen mt-5 rounded-xl border border-border overflow-hidden">
      {
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col gap-2 w-[50%] border-r border-border">
              <div className="p-5 flex w-full border-b border-border justify-center items-center h-fit shrink-0">
                <h1 className="w-fit text-xl text-textdark font-bold">
                  Sent Requests
                </h1>
              </div>
              {loading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <img src="/loading.svg" alt="loading..." />
                </div>
              ) : (
                <div className="grid grid-cols-2 p-5">
                  {reqData &&
                    reqData.map((e) => (
                      <Link
                        to={`/findbitbuddies/${e.receiver_id}`}
                        className="hover:no-underline"
                      >
                        <div className="border border-border hover:border-yellow-600  flex flex-col gap-5 rounded-xl p-4 m-5">
                          <h1 className="text-textdark">
                            Sent to
                            <span className="text-richtextdark mx-2">
                              {e.receivername}
                            </span>
                          </h1>
                          <div>
                            <h1 className="text-textdark">Requested Skills:</h1>
                            <div className="grid grid-cols-3">
                              {e.desired_skills &&
                                e.desired_skills.map((skill) => (
                                  <h1 className="text-richtextdark">{skill}</h1>
                                ))}
                            </div>
                          </div>
                          <div>
                            <h1 className="text-textdark capitalize">
                              request message:
                            </h1>
                            <p className="text-xs text-richtextdark">
                              {e.offermessage}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <div className="p-5 flex w-full border-b border-border justify-center h-fit items-center shrink-0">
                <h1 className="w-fit text-xl text-textdark font-bold">
                  Recived Requests
                </h1>
              </div>
              <div className="grid grid-cols-2 p-5">
                {reqrecivedData &&
                  reqrecivedData.map((e) => (
                    <div className="border border-border hover:border-yellow-600  flex flex-col gap-5 rounded-xl p-4 m-5">
                      <h1 className="text-textdark">
                        Sent by
                        <Link
                          to={`/findbitbuddies/${e.receiver_id}`}
                          className="hover:no-underline"
                        >
                          <span className="text-richtextdark mx-2">
                            {e.receivername}
                          </span>
                        </Link>
                      </h1>
                      <div>
                        <h1 className="text-textdark">Requested Skills:</h1>
                        <div className="grid grid-cols-3">
                          {e.desired_skills &&
                            e.desired_skills.map((skill) => (
                              <h1 className="text-yellow-600">{skill}</h1>
                            ))}
                        </div>
                      </div>
                      <div>
                        <h1 className="text-textdark capitalize">
                          request message:
                        </h1>
                        <p className="text-xs text-yellow-600">
                          {e.offermessage}
                        </p>
                      </div>
                      <div className="w-full flex justify-end">
                        <button className="hover:bg-green-600 transition-all duration-150 ease-in-out rounded-xl border border-green-600 text-textdark p-2 font-bold" onClick={()=>{handelaccept(e.sender_id,e.receiver_id)}}>Accept</button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link
              to={"/findbitbuddies"}
              className="w-[25%] h-[100%] cursor-pointer transition-all duration-200 ease-in-out hover:bg-richtextdark border border-richtextdark rounded-xl flex p-1 items-center justify-center text-xl font-bold text-textdark"
            >
              Find More Buddies
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Pendingreq;
