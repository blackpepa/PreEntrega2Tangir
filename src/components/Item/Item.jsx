import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


export const Item = ({id, name, title, description, price, image, category}) => {

  return (
       <Card style={{ width: '20rem', background: '#CDF0EA'}}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
          <Card.Title><h4>{title}</h4></Card.Title>
          <Card.Text>
            <p>{description}</p>
            <h5>Precio: ${price} </h5>
          </Card.Text>
          </Card.Body>
          <Link to={`/detail/${id}`} className='mx-auto mb-2' >
            <Button variant="warning">¡Cute!</Button>
          </Link>
      </Card>
  )
}