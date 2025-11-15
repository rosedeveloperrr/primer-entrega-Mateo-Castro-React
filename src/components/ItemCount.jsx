import { useState } from "react"

function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial)

  return (
    <div>
      <button onClick={() => setCount(c => Math.max(c - 1, 1))}>-</button>
      <span style={{ margin: 10 }}>{count}</span>
      <button onClick={() => setCount(c => Math.min(c + 1, stock))}>+</button>

      <br /><br />

      <button onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
