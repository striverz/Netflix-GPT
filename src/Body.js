import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './components/Browse/Browse'

const Body = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Header/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])

  
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body