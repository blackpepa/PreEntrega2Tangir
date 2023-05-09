import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import {BsTrash3} from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'



export const CartScreen = () => {

  const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)

  return (
    <div className='container mx-auto'>
      {
        carrito.length === 0
          ? <>
            <h3>Carrito vacío</h3>
            <hr />
            <Link to='/' className='btn btn-success m-auto'> Volver al listado</Link>
          </>:
          <>
            <h3>Resumen de compras</h3>
            <hr />
            {
              carrito.map((prod) => (
                <>
                  <div>
                    <p>Producto: {prod.description}</p>
                    <p>Precio: ${prod.price}</p>
                    <p>Cantidad: {prod.counter}</p>
                  </div>
                  <Button onClick={() => removerItem(prod.id)}>
                    <BsTrash3/>
                  </Button>
                </>
              ))
            }
            <hr />
            <strong>Precio total: ${precioTotal()}</strong>
            <hr />
            <Button variant='outline-danger'className='my-3' onClick={vaciarCarrito}> Vaciar Carrito </Button>
            <Link to= '/checkout'className='btn btn-success m-3'> 
            Finalizar compra
            </Link>
          </>
          
      }

    </div>
  )
}
