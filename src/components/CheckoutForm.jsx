import { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: ""
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false); // 🔥 loader

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // ⏳ INICIA loader

    const order = {
      buyer: form,
      items: cart,
      total: totalPrice,
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error generando orden:", error);
    } finally {
      setLoading(false); // 🔥 DETIENE loader
    }
  };

  // Si ya se generó la orden
  if (orderId) {
    return (
      <div style={{ padding: 20 }}>
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu ID de compra es:</p>
        <strong style={{ fontSize: 22 }}>{orderId}</strong>
      </div>
    );
  }

  // 🔥 MOSTRAR LOADER
  if (loading) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>Procesando tu compra...</h2>
        <div 
          style={{
            margin: "20px auto",
            width: 40,
            height: 40,
            border: "4px solid #ccc",
            borderTop: "4px solid #333",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}
        ></div>

        {/* Animación CSS inline */}
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
