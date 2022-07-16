import { useEffect } from 'react'
import './App.css'
import CartContainer from './components/CartContainer'
import Nav from './components/Nav'
import { useSelector } from "react-redux"
import Confirm from './components/Confirm'
import { getCartItems } from "./functions/cart"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const { open } = useSelector((store) => store.confirm)
  const { loading } = useSelector((store) => store.cart)

  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  if(loading){
    return(
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Nav />
      {open === false &&<CartContainer />}
      {open === true && <Confirm />}
    </div>
  )
}

export default App
