"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";

const Home: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        setSession(data.session);

        if (session) {
          // If session exists, fetch user data
          const userDataResponse = await fetchUserData(session.access_token);
          setUserData(userDataResponse);
          console.log("User data:", userDataResponse);
        }
      } catch (error: any) {
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

  const fetchUserData = async (accessToken: string) => {
    try {
      const response = await axios.get("http://localhost:3001/users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      console.error("Error fetching user data:", error.message);
      return null;
    }
  };

  return (
    <div>
      {!session ? (
        <div className="form-container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-14 px-8 sm:px-12 md:px-[60px]">
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="p-4">
            <h2 className="text-2xl text-center font-bold text-blue-800">
              Welcome back, {session.user.user_metadata.name}!
            </h2>

            <div className="user-info-container border-2 shadow-lg mt-8">
              <h3 className="text-lg font-semibold">User Information</h3>
              <div className="flex items-center mt-4">
                <img
                  className="w-20 h-20 rounded-full mr-4"
                  src={session.user.user_metadata.avatar_url}
                  alt="Avatar"
                />
                <div>
                  <p className="text-gray-600">
                    <strong>Name:</strong> {session.user.user_metadata.name}
                  </p>
                  <p className="text-gray-600 py-2">
                    <strong>Email:</strong> {session.user.email}
                  </p>
                  <p className="text-gray-600">
                    <strong>Last Sign In:</strong>{" "}
                    {session.user.last_sign_in_at}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="featureItem bg-white rounded-lg border-2 shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                  Collaborative Projects
                </h3>
                <p className="text-gray-600 mb-4">
                  Work on projects related to human improvement applications and
                  startups.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                  Explore Projects
                </button>
              </div>
              <div className="featureItem bg-white rounded-lg border-2 shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">User Engagement</h3>
                <p className="text-gray-600 mb-4">
                  Create an interactive learning experience with robust user
                  engagement features.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                  Engage Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
