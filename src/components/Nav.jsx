import { useSelector } from "react-redux";

export default function Nav() {
    const { amount } = useSelector((store) => store.cart)

  return (
    <nav>
        <div>
            <h1>Redux Project</h1>
        </div>
        <div>
           <h1>Total: {amount}</h1>
        </div>
    </nav>
  )
}
