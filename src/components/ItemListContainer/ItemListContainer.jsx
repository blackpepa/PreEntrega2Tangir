import React, {useEffect, useState} from 'react';
import './ItemListcontainer.css';
import {getFirestore} from '../../firebase/config'
import { ItemList } from '../ItemList/ItemList';
import { ColorRing } from  'react-loader-spinner';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {
  const[items, setItems] =useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()

useEffect(()=>{
  setLoading(true)

  const db =  getFirestore();

  const productos = categoryId
  ?db.collection('productos').where('category', '==', categoryId)
  :db.collection('productos')
    productos.get()
      .then((res) => {
        const newItem = res.docs.map((doc) =>{
          return { id: doc.id, ...doc.data()};
        })
        console.table(newItem)
        setItems(newItem);
      })
      .catch((err)=>console.log(err))
      .finally(()=>{
        setLoading(false)
      });
    

}, [categoryId, setLoading])

  return (
   <>
      <div className= "itemStyle">
        <h1>{props.saludo}</h1>
      </div>
    {}
      {
        loading
        ?<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperClass="spinTarget"
        colors={['#FDF4F5', '#E8A0BF', '#BA90C6', '#C0DBEA', '#CAF7E3']}
      />
       :<ItemList productos={items}/>
      }
    </>
   
  )
}