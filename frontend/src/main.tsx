import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'sonner'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Toaster theme='dark' position='top-left' richColors={true} invert={true}/>
    <App />
  
  </React.StrictMode>,
)
