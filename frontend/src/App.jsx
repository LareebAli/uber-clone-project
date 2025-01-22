import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/captainLogin'
import CaptainSingup from './pages/CaptainSingup'
import Start from './pages/Start'
import Usersign from './pages/UserSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<Usersign />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-Signup' element={<CaptainSingup />} />
        <Route path='/home' element={<UserProtectWrapper>
          <Home />
        </UserProtectWrapper>} />
        <Route path='/users/logout' element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />

<Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App