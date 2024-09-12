import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Interview from './components/interview/interview.jsx'
import Login from './components/Login/login.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/FeedackOnExam/Feedback.jsx'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="selectoptions" element={<Options />}/>
      <Route path="interview" element={<Interview />}/>
      <Route path="login" element={<Login />}/>
      <Route path="feedback" element={<Feedback />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
