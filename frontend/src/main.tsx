import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import store from './Store/store.ts'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Components/Landing.tsx'
// import Dashboard from './Components/userdata/Dashboard.tsx'
import Mainserachpage from './Components/Searchfunc/Mainserachpage.tsx'
import Filters from './Components/Searchfunc/Filters.tsx'
import Profile from './Components/Searchfunc/Profile.tsx'
import Layout from './Components/lib/Layout.tsx'

const router = createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Landing/> //these are the sub childern here you can add more 
    },
  ]
  }
  ,{
    path:"/dashboard",
    element:<Layout />
  },

  {
    path:"/findbitbuddies",
    element:<Mainserachpage/>,
    children:[
      {
        path:"/findbitbuddies/",
        element:<Filters/>
      },
      {
        path:"/findbitbuddies/:id",
        element:<Profile/>
      }

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
  <Provider store={store}>
  <Toaster theme='dark' position='top-center' richColors={true} invert={true}/>
    <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>,
)