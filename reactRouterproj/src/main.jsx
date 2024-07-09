import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github , { githubInfoLoader } from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children :[
//       {
//         path : "",
//         element : <Home />                       //Give element to be render
//       }, 
//       {
//         path : 'about',
//         element : <About />                      //Element to be render
//       },
//       {
//         path : 'contact',
//         element : <Contact />                    //Element to be render
//       }
//     ]
//   }
// ])

//OR WE CAN USE THIS SYNTAX

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element = {<Home />}/>
      <Route path='about' element = {<About />}/>
      <Route path='contact' element = {<Contact />}/>
      <Route path='user:userid'             // USERID IS TAKEN TO REFRENCE USE IN USER.JSX TO TAKE DYNAMIC DATA
      element = {<User />}/>   
      <Route 
      loader = {githubInfoLoader}               // THIS IS USED IN GITHUB.JSX FOR EARLY LOADING DATA
      path='github' 
      element = {<Github />}/>
    </Route>    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
