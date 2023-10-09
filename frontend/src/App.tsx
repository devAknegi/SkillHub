import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import { useState,useEffect } from "react";
import { createClient,Session,SupabaseClient } from "@supabase/supabase-js";

 const url:string = import.meta.env.VITE_URL
 const anon:string =  import.meta.env.VITE_KEY
 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [sessionData, setSessionData] = useState<Session | null>(null);
  const supabase:SupabaseClient = createClient(url,anon)
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error fetching session:', error);
        } else {
          setSessionData(data?.session ??null);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      }
    };

    fetchSession();
  }, []);

  console.log(sessionData)
  return (

    <>
      <div className="min-h-screen w-screen bg-bgdark scroll-smooth relative">
        <Nav />
        <Landing/>
      </div>
    </>
  );
}

export default App;
