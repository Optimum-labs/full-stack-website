import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function AuthButton() {
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

  return (
    <div>
      {!session ? (
        <>
          <Link
            to="/login"
            className="signUpBtn rounded-md bg-white ml-2 bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
          >
            Login
          </Link>
        </>
      ) : (
        <div>
          <Link
            to="/dashboard"
            className="loginBtn px-[22px] ml-2 py-2 text-base font-medium text-white hover:opacity-70"
          >
            Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}
