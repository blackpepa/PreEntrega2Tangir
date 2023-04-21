import React, {useEffect, useState} from 'react';
import './ItemListcontainer.css';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import { ColorRing } from  'react-loader-spinner';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {
  const[items, setItems] =useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()

useEffect(()=>{

  setLoading(true)
  pedirProductos()
    .then((res)=>{
      if(categoryId){
      setItems(res.filter(prod => prod.category === categoryId))
      }else{
        setItems(res)
      }
    })
    .catch((error)=>console.log(error))
    .finally (()=> {setLoading(false)})

}, [categoryId])

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