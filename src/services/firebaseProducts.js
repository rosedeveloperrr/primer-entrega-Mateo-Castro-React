import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const getProducts = async (categoria = null) => {
  const productsRef = collection(db, "products");

  let q = productsRef;
  if (categoria) {
    q = query(productsRef, where("categoria", "==", categoria));
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

