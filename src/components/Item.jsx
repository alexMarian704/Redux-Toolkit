import React from 'react'
import { removeItem ,increase , decrease } from "../functions/cart"
import { useDispatch } from "react-redux"

const Item = ({title , url , thumbnailUrl , id , albumId}) => {
    const dispatch = useDispatch()
  return (
    <section className='item-container'>
        <img src={thumbnailUrl} alt={title} />
        <div>
            <h4>{title}</h4>
            <div>
                <h4>Price:${id}</h4>
            </div>
            <button className='delete-but' onClick={()=> dispatch(removeItem(id))}>Delete</button>
        </div>
        <div>
            <button onClick={()=> dispatch(increase({id}))}>+</button>
            <h4>{albumId}</h4>
            <button onClick={()=> dispatch(decrease({id}))}>-</button>
        </div>
    </section>
  )
}

export default Item