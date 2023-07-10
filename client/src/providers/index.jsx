import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseAuthContextProvider } from '../contexts/SupabaseAuthContext'

export const AppProvider = ({ children }) => {
  return (
    <ChakraProvider>
      <SupabaseAuthContextProvider>
        <BrowserRouter>
          { children }
        </BrowserRouter>
      </SupabaseAuthContextProvider>
    </ChakraProvider>
  )
}
