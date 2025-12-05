import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
      <div className='cart-widget' style={{ position: "relative" }}>
        <img src='../src/assets/shopping-cart.svg' alt="" id='shopping-cart' />

        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: -5,
              right: -10,
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "3px 7px",
              fontSize: 12
            }}
          >
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  )
}

export default CartWidget
