import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/aboutUs/aboutus.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Github ,{githubInfoLoader} from './components/github/github.jsx'

const router =createBrowserRouter([
  // these method has array of list which contain objects needed 
   {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path: "",
        element:<Home/>
      },
      { 
        path: "about",
        element:<About/>
      },
      {
        path: "contact",
        element:<Contact/>
      },
      {
        path: "user/:userid",
        element:<User />
      },
      {
        loader:{githubInfoLoader},
        path:"github",
        element:<Github/> 
      }
    ]
   }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
       {/* it require one thing that is route that we need to create  */}
  </React.StrictMode>,
)
