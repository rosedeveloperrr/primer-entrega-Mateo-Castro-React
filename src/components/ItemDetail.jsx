import ItemCount from "./ItemCount"
import { useCart } from "../context/CartContext"

function ItemDetail({ producto }) {

  const { addToCart } = useCart();

  const onAdd = (cantidad) => {
    addToCart(producto, cantidad);
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <img src={producto.img} width={250} />
      <div>
        <h2>{producto.nombre}</h2>
        <h3>{producto.presentacion}</h3>
        <p>${producto.precio}</p>

        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
