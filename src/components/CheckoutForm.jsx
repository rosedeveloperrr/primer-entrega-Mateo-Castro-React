import { useState } from "react";
import { useCart } from "../context/CartContext";

function CheckoutForm() {
  const { carrito, totalPrice, clear } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Orden generada:", {
      buyer: form,
      items: carrito,
      total: totalPrice
    });

    alert("Compra realizada (ver consola por ahora)");
    clear();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        /><br /><br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        /><br /><br />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
