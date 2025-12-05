import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../services/firebaseProducts";
import ItemDetail from "../components/ItemDetail"

function ItemDetailContainer() {

  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    getProductById(id).then(setProducto)
  }, [id])

  return (
    <div style={{ padding: 20 }}>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemDetailContainer
