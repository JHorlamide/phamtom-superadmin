import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import App from './App.tsx'
import { theme } from './theme/theme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Toaster toastOptions={{ duration: 4000 }} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
