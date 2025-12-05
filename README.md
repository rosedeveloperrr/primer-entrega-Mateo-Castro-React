# 🛒 E-commerce React + Firebase

Proyecto final del curso de React (CoderHouse).  
Aplicación e-commerce desarrollada con React, Firebase y React Router.

---

## 🚀 Tecnologías utilizadas

- **React**
- **React Router**
- **Firebase Firestore**
- **Context API (Carrito global)**
- **Vite**
- **CSS puro**

---

## 📦 Funcionalidades principales

### ✔ Catálogo de productos
- Listado dinámico desde Firestore.
- Filtrado por categorías (bebidas, snacks, limpieza).
- Vista en detalle de cada producto.

### ✔ Carrito de compras
- Implementado con **Context API**.
- Agregar productos con la cantidad seleccionada.
- Mostrar subtotal, total y cantidad total.
- Eliminar productos o vaciar carrito.

### ✔ Checkout
- Formulario para ingresar datos del comprador.
- Generación de orden en Firestore (colección **orders**).
- Fecha automática con `serverTimestamp()`.
- Muestra el **ID de orden** al finalizar.

### ✔ Navegación
- SPA completa sin recargas.
- Rutas:
  - `/`
  - `/categoria/:id`
  - `/producto/:id`
  - `/cart`
  - `/checkout`
  - `*` (404)

---

## 🗄 Estructura de Firestore

### Colección: **products**
Cada documento contiene:

```json
{
  "nombre": "Coca Cola",
  "precio": 1200,
  "categoria": "bebidas",
  "img": "URL",
  "stock": 10
}
