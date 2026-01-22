import React, { useContext } from 'react'
import './Car.css'
import { Storecontext } from '../../Context/StoreContextValue'
import { Link } from 'react-router-dom'
const Car = () => {
  const {cardItems, food_list, removeFromCard} = useContext(Storecontext);
  console.log("cardItems:", cardItems);
  console.log("food_list:", food_list);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cardItems[item];
      }
    }
    return totalAmount;
  };

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2; // No delivery fee if cart is empty
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
   <div className="car-ITEM">
    <div className="card_item_price">
      <p>Item</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <br />
    <hr />
    {food_list.map((item, index) => {
      if (cardItems[item._id] > 0) {
        return (
          <div key={index}>
            <div className="card_item_price card-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cardItems[item._id]}</p>
              <p>${item.price * cardItems[item._id]}</p>
              <p onClick={() => removeFromCard(item._id)} className='cross'>x</p>
            </div>
            <hr />
          </div>
        )
      }
      return null;
    })}
    {Object.keys(cardItems).length === 0 && <p>Your cart is empty.</p>}

    {subtotal > 0 && (
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total}</b>
            </div>
          </div>
          <button><Link to='/placeorder' style={{color: 'white', textDecoration: 'none'}}>PROCEED TO CHECKOUT</Link></button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )}
   </div>
    </div>
  )
}

export default Car