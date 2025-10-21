import CartWidget from './CartWidget.jsx'

function Navbar () {
  return (
    <nav className = 'navbar'>
      <h1 className = 'logo'>Tienda360</h1>
      <ul>
        <li>Teclados</li>
        <li>Mouses</li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar