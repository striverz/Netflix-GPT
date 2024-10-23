import React from 'react'
import Header from './components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Header/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body