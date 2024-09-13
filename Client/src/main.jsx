import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Interview from './components/interview/interview.jsx'
import Login from './components/Login/Login.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/FeedackOnExam/Feedback.jsx'
import PublicRoute from './utils/PublicRoutes.jsx'
import ProtectedRoute from './utils/ProtectedRoutes.jsx'
import Error from './components/404/Error.jsx'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route element={<PublicRoute redirectPath="/" />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="protected" element={<ProtectedRoute />}/>
        <Route path="selectoptions" element={<Options />}/>
        <Route path="interview" element={<Interview />}/>
        <Route path="feedback/:id" element={<Feedback />} />
      <Route/>
      <Route path="*" element={<Error />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
