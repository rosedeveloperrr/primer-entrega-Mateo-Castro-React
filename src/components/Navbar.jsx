import { Link } from "react-router-dom"
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/">Home</Link>

      <Link to="/categoria/bebidas">Bebidas</Link>
      <Link to="/categoria/snacks">Snacks</Link>
      <Link to="/categoria/limpieza">Limpieza</Link>

      <CartWidget />

    </nav>
  )
}

export default Navbar
