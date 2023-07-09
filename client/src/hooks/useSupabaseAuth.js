import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export const useSupabaseAuth = () => {
  const [ session, setSession ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      setSession(session);
      setIsLoading(false);
    });

    const { 
      data: { subscription } 
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session)
      setSession(session);
      setIsLoading(false);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 3000);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email, 
      password,
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  }

  return { session, isLoading, signUp, signIn };
};
