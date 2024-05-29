import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UserHomePage from './Pages/userHomePage'

// import this signUp page later
import SignUpPage from './Pages/signUpPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


export default function App() {


  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route index element={<UserHomePage />} />
          <Route path='/signUp' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}


