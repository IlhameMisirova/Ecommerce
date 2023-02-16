import React from 'react'
import "./App.css"
import Home from './pages/home'
import Navbar from "./pages/navbar"
import { Route, Routes } from "react-router-dom";
import Card from "./pages/card"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./pages/signIn"
import SignUp from './pages/signUp';



const App = () => {
  return (
      <div >
            <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
         <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}  />
           <Route path="/bag" element={<Card />}  />
           <Route path="/signin" element ={<SignIn/>} />
           <Route path ="/signup" element={<SignUp/>}/>
        </Routes>
        
      </div>
    
  )
}

export default App