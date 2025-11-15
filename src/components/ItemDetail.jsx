import ItemCount from "./ItemCount"

function ItemDetail({ producto }) {

  const onAdd = (cantidad) => {
    console.log("Agregar", cantidad)
  }

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <img src={producto.img} width={250} />
      <div>
        <h2>{producto.nombre}</h2>
        <h3>{producto.presentacion}</h3>
        <p>${producto.precio}</p>

        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
