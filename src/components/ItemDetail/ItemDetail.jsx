import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {ItemCount} from './../ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import './ItemDetail.css'

export const ItemDetail = ({ id, name, title, description, price, image, category, stock }) => {

  const navigate = useNavigate()

  const volverHaciaAtras = () =>{
    navigate(-1)
  }

  const {addToCart} = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () =>{
        const newItem = {
          id,
          name,
          title,
          description,
          image,
          price,
          category,
          counter
        }
        console.log(newItem)
        addToCart(newItem)
        Swal.fire({
          icon: 'success',
          title: 'Tu producto fue agregado al carrito',
          showConfirmButton: false,
          timer: 1000
        })
  }



  return (
    <div>
      <Card style={{ width: '25rem', margin: 'auto', background: '#E5E0FF'}} >
        <Card.Img variant="top" src={image} />
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
          <Button variant='success' className='m-auto' onClick={sumarAlCarrito}>
            Agregar al carrito</Button>
        </Card.Body>
        <Link to='/cart' className='btn btn-warning m-2'>
          Ir al carrito
        </Link>
        <Button variant="outline-info" onClick={volverHaciaAtras} className='m-2'>Ver más productos</Button>
      </Card>
    </div>
  )
}