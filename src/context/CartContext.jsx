import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addItem = (producto, cantidad) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);

      if (existe) {
        // si ya estaba, sumo cantidades
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }

      return [...prev, { ...producto, cantidad }];
    });
  };

  const removeItem = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const clear = () => {
    setCarrito([]);
  };

  const totalQuantity = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const totalPrice = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{ carrito, addItem, removeItem, clear, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}