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
import Dashboard from './Components/userdata/Dashboard.tsx'
import Mainserachpage from './Components/Searchfunc/Mainserachpage.tsx'

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
    element:<Dashboard />
  },
  {
    path:"/findbitbuddies",
    element:<Mainserachpage/>
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
