import React, { useContext } from 'react'
import './Fodd.css'
import { Storecontext } from '../StoreContextValue'
import Fooditem from '../../Components/Fooditem/Fooditem'

const Fodd = ({category}) => {
    const {food_list} = useContext(Storecontext)
  return (
    <div className='food-dispay'>
        <h2>Top dishes neary you</h2>
        <div className='fodd-dispay-list'>
          {food_list.filter(item => category === "ALL" || item.category === category).map((item,index)=>{
            return <Fooditem key = {index} id={item._id} name = {item.name} price = {item.price} description = {item.description} image = {item.image}/>
          })}
        </div>

    </div>
  )
}

export default Fodd