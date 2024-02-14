import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registartion'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page_404 from './pages/Page_404'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/register",
      element: <Registration />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "*",
      element: <Page_404 />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
