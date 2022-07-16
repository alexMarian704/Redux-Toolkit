import { useEffect } from 'react'
import Item from './Item'
import { useSelector , useDispatch } from "react-redux"
import { cartPrice } from "../functions/cart"
import { openConfirm } from "../functions/confirm"

const CartContainer = () => {
    const dispatch = useDispatch()
    const { total, amount, cartItems } = useSelector((store) => store.cart)

    useEffect(()=>{
        dispatch(cartPrice())
    },[cartItems])

    if (amount < 1) {
        return (
            <div className='empty-cart'>
                <h3>You cart in empty</h3>
            </div>
        )
    }
    return (
        <div className='cart-container'>
            <header><h2>Cart</h2></header>
            <div>
                {cartItems.map((item)=>(
                    <Item  key={item.id} {...item}/>
                ))}
            </div>
            <div className='clear-cart'>
                <h4>Total: ${total}</h4>
                <button onClick={()=> dispatch(openConfirm())}>Clear cart</button>
            </div>
        </div>
    )
}

export default CartContainer