import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Dashboard from "../Dashboard";
import "../Authication.css";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient( supabaseUrl, supabaseKey );

export default function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        setSession(data.session);
      } catch (error) {
        console.error("Error fetching session:", error.message);
      }
    };

    const authListener = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
       

    fetchSession();

    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, []);
  

  if (!session) {
    return (
      <div className="form-container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-14 px-8 sm:px-12 md:px-[60px]">
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <section className="bg-[#F4F7FF] py-14 lg:py-20 dark:bg-dark">        
          <div className="dashboard">
            <Dashboard user={session.user} />
          </div>
      </section>
    );
  }
}
