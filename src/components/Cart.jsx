import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Carrito</h2>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${totalPrice}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>

      <br /><br />

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}

export default Cart;
