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
import Details from './pages/Details'
import Protected from './utils/Protected'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protected><Home /></Protected>
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
      path: "/detail/:id",
      element: <Protected><Details /></Protected>
    },
    {
      path: "*",
      element: <Protected><Page_404 /></Protected>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
