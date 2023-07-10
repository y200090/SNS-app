import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

const SupabaseAuthContext = createContext();

export const SupabaseAuthContextProvider = ({ children }) => {
  const [ session, setSession ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      setSession(session);
    });

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);
      setSession(session);
    });

    // setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
  };

  const exposed = {
    session,
    isLoading,
    signUp,
    signIn,
  };

  return (
    <SupabaseAuthContext.Provider value={exposed}>
      { children }
    </SupabaseAuthContext.Provider>
  );
};

export const useSupabaseAuth = () => useContext(SupabaseAuthContext);
