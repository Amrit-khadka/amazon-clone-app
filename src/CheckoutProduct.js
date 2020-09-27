import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({id, image, title, price, rating, hiddenButton }) {
  const[{basket} , dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id  : id
      })

    console.log(basket.id)
  }


  return (
 
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src = {image} />
      
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small> 
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(( ) => (
              <p>🌟</p>
            ))}
        </div>

        {!hiddenButton && ( 
           <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
        
       
        
      </div>
    </div>
  )
}

export default CheckoutProduct
