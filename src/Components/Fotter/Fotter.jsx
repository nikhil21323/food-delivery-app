import React from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

const Fotter = () => {
  return (
    <div className='fotter' id='fotter'>
        <div className='fotter-contex'>
            <div className='fotter-cont-left'>
            <img src={assets.logo} alt="" />
            <p>© 2024 Food Delivery App. All rights reserved</p>
            <div className="fotter-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
            </div>
            <div className="fotter-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy-Policay</li>
            </ul>
            </div>
            <div className="fotter-contect-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7856047628</li>
                <li>ojhanikhil841@gmail.com</li>
            </ul>
            </div>
        </div>
     <hr />
     <p>Copyrights reserved</p>
    </div>
  )
}

export default Fotter