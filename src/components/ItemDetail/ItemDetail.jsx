import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {ItemCount} from './../ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

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
        if(counter>0){
        console.log(newItem)
        addToCart(newItem)
        Swal.fire({
          icon: 'success',
          title: 'Tu producto fue agregado al carrito',
          showConfirmButton: false,
          timer: 1000
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Debés agregar al menos un producto',
        })
      }
  }



  return (
    <div>
      <Card style={{ width: '25rem', margin: 'auto', background: '#CDF0EA'}} >
        <Card.Img variant="top" src={image} />
        <Card.Body variant='m-2'>
          <Card.Title><h4>{title}</h4></Card.Title>
          <Card.Text><p>{description}</p></Card.Text>
          <Card.Text><h5>Precio: ${price}</h5></Card.Text>
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>

        </Card.Body>
        <Button className='mx-auto mb-2' variant='success' onClick={sumarAlCarrito}>
            Agregar al carrito</Button>
        <Link to='/cart' className='btn btn-warning m-2'>
          Ir al carrito
        </Link>
        <Button variant="outline-info" onClick={volverHaciaAtras} className='m-2'>Ver más productos</Button>
      </Card>
    </div>
  )
}