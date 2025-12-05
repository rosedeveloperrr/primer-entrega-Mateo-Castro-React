import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h4>{item.nombre}</h4>
      <p>Precio: ${item.precio}</p>
      <p>Cantidad: {item.cantidad}</p>
      <p>Subtotal: ${item.precio * item.cantidad}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;