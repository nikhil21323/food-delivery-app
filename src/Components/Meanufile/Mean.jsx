import React from 'react'
import './Mean.css'
import {menu_list} from '../../assets/assets.js'

const Mean = ({category,setCategory}) => {
  return (
    <div className='explore-manu' id='explore-manu'>
        <h1>Explore Our Menu</h1>
<p>We provide you the best food delivery service in your town our food delivery show to error 
 thir no show me yor chose bat jdddjd.</p>   
 <div className="explore-manu-list">
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} className="explore-manu-item" key={index}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <h3>{item.menu_name}</h3>
                <p>{item.menu_price}</p>
            </div>
        )
    })}
 </div>
 <hr />
  </div>
  )
}

export default Mean