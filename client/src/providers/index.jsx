import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../contexts/AuthContext'

export const AppProvider = ({ children }) => {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </AuthContextProvider>
    </ChakraProvider>
  )
}
