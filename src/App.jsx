import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {


  return (
      <div>
        <Navbar />
        <ItemListContainer label="Items proximamente..." />
      </div>
  )
}

export default App
