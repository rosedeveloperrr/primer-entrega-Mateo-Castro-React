import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget" style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        alt="Carrito"
        style={{ width: 30 }}
      />
      
      {/* Muestra solo si hay productos */}
      {totalQuantity > 0 && (
        <span id="cart-counter">{totalQuantity}</span>
      )}
    </Link>
  );
}

export default CartWidget;
