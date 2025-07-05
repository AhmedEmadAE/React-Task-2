import React, { Children } from 'react'
import { createBrowserRouter, createHashRouter, Route, RouterProvider } from 'react-router'
import Register from './Components/Register/Register'
import Layout from './Components/Layout/Layout'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'






const route = createHashRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "Login", element: <Login /> },

    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}
