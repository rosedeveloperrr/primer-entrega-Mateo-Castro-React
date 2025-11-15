import Item from "./Item"

function ItemList({ productos }) {

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {productos.map(p => (
        <Item key={p.id} producto={p} />
      ))}
    </div>
  )
}

export default ItemList
