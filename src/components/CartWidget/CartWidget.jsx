import React, { useContext } from 'react';
import './CartWidget.css'
//import Cart from './cart.svg'
import { CartContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';
import {HiOutlineShoppingCart, IconName} from 'react-icons/hi'

export const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext)

  return (
    <div className='cartStyle'>
      <HiOutlineShoppingCart className='cartIcon'/>
      <span><Badge pill bg="warning" text="dark">{calcularCantidad()}</Badge></span>
    </div>
  )
}
