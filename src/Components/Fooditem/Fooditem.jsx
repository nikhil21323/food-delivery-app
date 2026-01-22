import React, { useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/StoreContextValue'

const Fooditem = ({id,name,price,description,image}) => {
    const {cardItems,addtoCard,removeFromCard} = useContext(Storecontext);
  return (
    <div className='food-item'>
        <div className='food-item-container'>
            <img className='food-item-image' src={image} alt="" />
            {! cardItems[id] 
            ? <img className='add' onClick={()=> addtoCard(id)} src={assets.add_icon_white}alt=''/>
            : <div className='food-item-control'>
           <img onClick={()=>removeFromCard(id)} src={assets.remove_icon_red} alt="" />
           <p>{cardItems[id]}</p>
           <img onClick={()=>addtoCard(id)} src={assets.add_icon_green} alt="" />
            </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-desc">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>

    </div>
  )
}

export default Fooditem