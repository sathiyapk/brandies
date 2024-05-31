import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Products } from './pages/Products.jsx'
import { Cepages } from './pages/Cepages.jsx'
import { Ambition } from './pages/Ambition.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App /> 
  },
  {
    path: "products",
    element:  <Products /> 
  },
  {
    path: "cepages",
    element:  <Cepages/> 
  },
  {
  path: "ambition",
  element:  <Ambition/> 
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
