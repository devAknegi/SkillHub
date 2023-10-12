import {useState, useEffect } from "react";
type ProfileData = {
  id?: string;
  name?: string;
  bio?: string;
  skills?: string[];
  phone?: string;
  email?: string;
  username?:string;
  Experties?:string[];
};

const Dashboard = () => {
  const [users,setusers] = useState<ProfileData[]>([{}])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5171/api/users');
        const data = await response.json();
        setusers(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center gap-5 flex-col">
      <h1 className="text-4xl mt-4 text-textdark">Nerds</h1>
      
      {users.length!==0? users.map((e)=>(
        <div key={e.id} className="bg-textdark w-[50%] rounded-xl p-5">
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>
          <p>{e.bio}</p>
          <h1>{e.phone}</h1>
          <h1 className="text-richtextdark text-center" >{e.skills}</h1>
        </div>
      )):"No Users Avilable at the moment"}
    </div>
  )
}

export default Dashboard