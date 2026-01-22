import React, { useState } from 'react'
import './Naver.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Naver = ({setshowLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='naver'>
      <img src={assets.logo} alt="" />
     <ul className='naver-menu'>
       <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
       <a href='#explore-manu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
       <a  href='#app-down' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
       <a href='#fotter' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
     </ul>
     <div className='naver-icon'>
      <CiSearch size={25} style={{marginRight:"20px", cursor:"pointer"}}/>
      <Link to='/cart'><CiShoppingCart size={25} style={{cursor:"pointer"}}/></Link>
      <button onClick={() => setshowLogin(true)}>sign in</button>
     </div>
    </div>
  )
}

export default Naver
