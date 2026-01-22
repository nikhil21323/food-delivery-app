import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets';
const Header = () => {
  return (
    <div>
         <div className='header'>
                        <img src= {assets.header_img} alt="" className='header-img' />
                        <div className='header-content'>
                            <h1>Order your favourite food here</h1>
                            <p>We provide you the best food delivery service in your town.</p>
                            <button>Order Now</button>
                        </div>
                        <dir>    
                        </dir>
                    </div>
    </div>
  )
}

export default Header