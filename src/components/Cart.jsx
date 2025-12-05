import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { carrito, totalPrice, clear } = useCart();

  if (carrito.length === 0) {
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

      {carrito.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${totalPrice}</h3>

      <button onClick={clear}>Vaciar carrito</button>

      <br /><br />

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}

export default Cart;