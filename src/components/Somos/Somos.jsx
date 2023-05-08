import React from 'react';
import Gracias from './gracias.jpg';
import './Somos.css';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Somos = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
          <Col md="auto">
            <h2>Somos Kawaii</h2>
          </Col>
      </Row>
      <Row>
        <Col className='mt-5'>
          <p>Somos una tienda online dedicada a hacer del mundo un lugar más cute.</p>
          <p>En nuestro catálogo vas a encontrar knick knacks de todo tipo.</p>
          <p>Si te gustan los unicornios, los pandas y los gatitos esta es tu tienda.</p>
          <p>Además traemos cosas a pedido directo de Japón y realizamos envíos a todo el país.</p>
          <p><strong>¡Ponele Kawaiii a tu vida!</strong></p>
        </Col>
        <Col className='mt-5'> 
          <img src={Gracias} alt="" className='w-50 somosStyle'/>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col md="auto">
          <Link to='/' className='btn btn-warning mt-5'>Visitar la tienda</Link>
        </Col>
      </Row>
    </Container>
  )
}

