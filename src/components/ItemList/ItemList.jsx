import React from 'react'
import {Item} from '../Item/Item'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemList.css';

export const ItemList = ({productos=[]}) => {

  return (
    <div>
        <h3>Los productos más cute de internet</h3>
          <Row xs={1} md={2} className="g-1">
            {productos.map((item) => <Col md={3} className="g-4"><Item {...item} key={item.id}/></Col>)}
          </Row>
        </div>
  )
}