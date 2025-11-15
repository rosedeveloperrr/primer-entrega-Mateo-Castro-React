import { Link } from "react-router-dom"

function Item({ producto }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, width: 200 }}>
      <img src={producto.img} style={{ width: "100%" }} />
      <h4>{producto.nombre}</h4>
      <p>${producto.precio}</p>
      <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item
