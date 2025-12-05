import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (item, cantidad) => {
    const existe = cart.find(p => p.id === item.id);
    
    // Validar stock
    if (existe) {
        const nuevaCantidad = existe.cantidad + cantidad;
        if (nuevaCantidad > item.stock) {
        alert(`No hay suficiente stock. Disponible: ${item.stock}`);
        return;
        }
        setCart(cart.map(p =>
        p.id === item.id
            ? { ...p, cantidad: nuevaCantidad }
            : p
        ));
    } else {
        if (cantidad > item.stock) {
        alert(`No hay suficiente stock. Disponible: ${item.stock}`);
        return;
        }
        setCart([...cart, { ...item, cantidad }]);
    }
};

  // Eliminar un producto
  const removeItem = (id) => {
    setCart(cart.filter(p => p.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Cantidad total de items
  const totalItems = cart.reduce((acc, p) => acc + p.cantidad, 0);

  // Total en $
  const totalPrice = cart.reduce((acc, p) => acc + p.cantidad * p.precio, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
