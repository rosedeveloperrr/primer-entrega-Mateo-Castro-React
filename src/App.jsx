import './App.css'
import Navbar from './components/Navbar.jsx'
import Cart from "./components/Cart.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import { Routes, Route } from "react-router-dom"

// Contenedores
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'



// 404
const NotFound = () => <h2 style={{ padding: 20 }}>404 - Página no encontrada</h2>

function App() {
  return (
    <div>
      <Navbar />

      <Routes>

        {/* Lista general */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Lista filtrada por categoría */}
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

        {/* Detalle */}
        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        {/* Rutas del carrito */}
        <Route path="/cart" element={<Cart />} />
        
        {/* Checkout */}
        <Route path="/checkout" element={<CheckoutForm />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
