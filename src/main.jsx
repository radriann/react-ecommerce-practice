import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { FiltersContextProvider } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </FiltersContextProvider>
)
