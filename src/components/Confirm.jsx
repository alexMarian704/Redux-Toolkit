import React from 'react'
import { useDispatch } from "react-redux"
import { closeConfirm } from "../functions/confirm"
import { clearCart } from "../functions/cart"

const Confirm = () => {
    const dispatch = useDispatch()
    return (
        <div className='confirm-container'>
            <h3>Remove all items ?</h3>
            <div>
                <button onClick={() => {
                    dispatch(clearCart())
                    dispatch(closeConfirm());
                }}>Confirm</button>
                <button onClick={() => dispatch(closeConfirm())}>Never mind</button>
            </div>
        </div>
    )
}

export default Confirm