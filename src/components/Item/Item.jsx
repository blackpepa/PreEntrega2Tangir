import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


export const Item = ({id, name, title, description, price, image, category}) => {

  return (
       <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
          <Card.Title><h4>{title}</h4></Card.Title>
          <Card.Text>
            <p>{description}</p>
            <p>${price} </p>
          </Card.Text>
          <Link to={`/detail/${id}`}>
            <Button variant="warning" size="l">¡Cute!</Button>
          </Link>
          </Card.Body>
      </Card>
  )
}