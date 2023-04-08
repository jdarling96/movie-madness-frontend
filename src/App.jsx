import Home from './homepage/Home'
import React from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, RouterProps, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter (
  createRoutesFromElements(

    
        
          <Route exact path="/" element={<Home/>}/>
          
            
          
          
          
     
    
  )
);

function App({routes}) {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
  
  

}

export default App
