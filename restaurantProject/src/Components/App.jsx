import React from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Logout' element={<Logout/>}/>
      </Routes>
    </div>
  )
}

export default App
