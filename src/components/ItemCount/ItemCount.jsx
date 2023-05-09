import React from 'react'
import {TiPlusOutline, TiMinusOutline} from 'react-icons/ti'
import "./ItemCount.css";

export const ItemCount = ({max, cantidad, modify}) => {


    const sumar = () =>{
        if(cantidad < max){
        modify(cantidad +1)
        }
    }
    const restar =() =>{
        if (cantidad >0){
            modify(cantidad -1)            
        }
    }

    return(
        <>
        <div className='addStyle'>
        <div>
            <button onClick={restar}><TiMinusOutline/></button>
        </div>
        <div>
            <h4> {cantidad} </h4>
        </div>
        <div>
            <button onClick={sumar}><TiPlusOutline/></button>
        </div>
        </div>
        </>
    )
}