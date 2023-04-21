import React from 'react';
import './CartWidget.css'
import Cart from './cart.svg'
//import {FaShoppingCart, IconName} from 'react-icons/fa'


export const CartWidget = () => {
  return (
    <div className='cartStyle'>
      <img src={Cart} alt="carrito" className='cartImage'/>
      <p className='cartText'>20</p>
    </div>
  )
}
