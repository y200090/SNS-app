import { createContext } from "react";
import { useSupabaseAuth } from "../hooks/useSupabaseAuth";
import { Box } from "@chakra-ui/react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { session, isLoading } = useSupabaseAuth();

  // const value = { session, isLoading };
  
  if (isLoading) {
    return <Box h='100vh' w='100vw' bg='red.100'>Loading...</Box>
  }
  
  return (
    <AuthContext.Provider value={{ session }}>
      { children }
    </AuthContext.Provider>
  )
};
