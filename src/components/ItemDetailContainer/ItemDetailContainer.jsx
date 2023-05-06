import React, {useState, useEffect} from 'react'
import {getFirestore} from '../../firebase/config'
import { ColorRing } from  'react-loader-spinner';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'


export const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const{itemId} =useParams()
        
    useEffect(() =>{
      setLoading(true)

      const db = getFirestore()

      const productos = db.collection('productos')

      const item = productos.doc(itemId)

      item.get()
          .then((doc) =>{
              setItem({
                  id: doc.id, ...doc.data()
              })
              
          })
          .catch((err) => console.log(err))
          .finally(() =>{

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
