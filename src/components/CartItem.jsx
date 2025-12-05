import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <h4>{item.nombre}</h4>
        <p>Precio: ${item.precio}</p>
        <p>Cantidad: {item.cantidad}</p>
        <p><strong>Subtotal:</strong> ${item.precio * item.cantidad}</p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: 4
        }}
      >
        X
      </button>
    </div>
  );
}

export default CartItem;
