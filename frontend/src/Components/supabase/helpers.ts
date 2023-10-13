import { createClient } from "@supabase/supabase-js";
import SupabaseClient from "@supabase/supabase-js/dist/module/SupabaseClient";
import { toast } from "sonner";

const url: string = import.meta.env.VITE_URL;
const anon: string = import.meta.env.VITE_KEY;
const supabase: SupabaseClient = createClient(url, anon);




export const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Visit again 🫠");
      }
    } catch (error) {
      toast.error("something went wrong");
      console.error("Unexpected error:", error);
    }

  };

