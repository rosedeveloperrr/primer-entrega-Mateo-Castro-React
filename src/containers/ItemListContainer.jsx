import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../services/productsService"
import ItemList from "../components/ItemList"

function ItemListContainer() {

  const { categoriaId } = useParams()
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    getProducts(categoriaId)
      .then(res => setProductos(res))
      .finally(() => setLoading(false))

  }, [categoriaId])

  return (
    <div style={{ padding: 20 }}>
      {loading ? <p>Cargando...</p> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer
