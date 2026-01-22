import React from 'react'
import './Appdo.css'
import { assets } from '../../assets/assets'
const Appdo = () => {
  return (
    <div className='app-dowanloade' id='app-down'>
     <p>For better exprense  <br />Tomato App</p>
     <div className="app-dowanloade-app">
        <img src={assets.app_store} alt="" />
        <img src={assets.app_store} alt="" />
     </div>
    </div>
  )
}

export default Appdo