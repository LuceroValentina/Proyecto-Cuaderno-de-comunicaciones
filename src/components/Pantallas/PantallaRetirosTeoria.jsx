import React, { useState, useEffect } from "react";
import FormRetiros from "../Formularios/FormRetiros";
import TablaRetiros from "../TablaRetiros";
import { db } from "../../firebase/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const PantallaRetirosTeoria = () => {
  const [retiros, setRetiros] = useState([]);

  useEffect(() => {
    const obtenerRetiros = async () => {
      const querySnapshot = await getDocs(collection(db, "retiros_teoria"));
      const data = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setRetiros(data);
    };
    obtenerRetiros();
  }, []);

  const agregarRetiro = async (nuevoRetiro) => {
    const docRef = await addDoc(collection(db, "retiros_teoria"), nuevoRetiro);
    setRetiros((prev) => [...prev, { id: docRef.id, ...nuevoRetiro }]);
  };

  const eliminarRetiro = async (id) => {
    await deleteDoc(doc(db, "retiros_teoria", id)); 
    setRetiros((prev) => prev.filter((r) => r.id !== id)); 
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        Retiros de Teoria, colocar boton firmar
      </h1>
      <FormRetiros onAgregar={agregarRetiro} />
      <TablaRetiros retiros={retiros} onEliminar={eliminarRetiro} />
    </div>
  );
};
export default PantallaRetirosTeoria;
