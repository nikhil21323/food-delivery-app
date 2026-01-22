import React, { useState } from 'react'
import Naver from './Components/Naver/Naver.jsx'
import Home from './Pages/Homepage/Home'
import Car from './Pages/Cart/Car'
import Order from './Pages/Placeorder/Order'
import { Route, Routes } from 'react-router-dom'
import Fotter from './Components/Fotter/Fotter'
import Login from './Components/Loginpage/Login.jsx'

const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  return (
    <div>
      {showLogin?<Login setshowLogin={setshowLogin}/>:<></>}
      <Naver setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Car/>}/>
        <Route path='/placeorder' element={<Order/>}/>
      </Routes>
      <Fotter/>
    </div>
  )
}

export default App
