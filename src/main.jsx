import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import { router } from './router'
import "./style.css"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  </React.StrictMode>
)
