import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import Usersign from './pages/UserSignUp'
import CaptainLogin from './pages/captainLogin'
import CaptainSingup from './pages/CaptainSingup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<Usersign/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-Signup' element={<CaptainSingup/>} />
      </Routes>
    </div>
  )
}

export default App