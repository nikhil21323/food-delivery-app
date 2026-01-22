import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header';
import Mean from '../../Components/Meanufile/Mean';
import Fodd from '../../Context/Fodddisplay/Fodd';
import Appdo from '../../Components/Appdowlode/Appdo';
const Home = () => {
    const[category,setCategory]=useState("ALL");
  return (
    <div>
      <Header/>
      <Mean category={category} setCategory={setCategory}/>
      <Fodd category={category}/>
      <Appdo/>
    </div>
  )
}

export default Home