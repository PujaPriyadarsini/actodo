import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App';
import Login from './login'
import Signup from './signup'


const root = ReactDOM.createRoot(document.getElementById('root'));


function User()

{ 
  const[users,setuser]= useState(
  [
      {
          username:"puja",
          Password:"123"
      }
  ]
  )
  
  return(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setuser={setuser}/>} />
      <Route path='/signup' element={<Signup users={users} setuser={setuser}/>} />
      <Route path='/app' element={<App />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>)

}


root.render(
  <User/>
  )

