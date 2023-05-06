import React, { useContext } from 'react';
import './CartWidget.css'
import Cart from './cart.svg'
import { CartContext } from '../context/CartContext';
//import {FaShoppingCart, IconName} from 'react-icons/fa'


export const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext)

  return (
    <div className='cartStyle'>
      <img src={Cart} alt="carrito" className='cartImage'/>
      <span>{calcularCantidad()}</span>
    </div>
  )
}
