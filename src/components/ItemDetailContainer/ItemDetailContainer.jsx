import React, {useState, useEffect} from 'react'
import {pedirProductos} from '../../helpers/pedirProductos'
import { ColorRing } from  'react-loader-spinner';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const{itemId} =useParams()

    useEffect(()=>{

        setLoading(true)
        pedirProductos()
            .then(res=>{
                setItem(res.find (prod => prod.id === Number(itemId)))
            })
            .catch((error)=> console.log(error))
            .finally(()=>{
                setLoading(false)
            })
    },[itemId])

  return (
    <section>
        {
            loading?
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="spinTarget"
            colors={['#FDF4F5', '#E8A0BF', '#BA90C6', '#C0DBEA', '#CAF7E3']}
          />
            :<ItemDetail {...item}/>
        }
      
    </section>
  )
}
