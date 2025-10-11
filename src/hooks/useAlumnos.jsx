import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const crearAlumno = async ({
  nombre,
  apellido,
  dni,
  telefono,
  direccion,
  genero,
  ciclo,
  turno,
  curso,
  correo,
}) => {
  try {
    if (!correo) throw new Error("El correo es obligatorio como ID.");

    const ref = doc(db, "alumnos", correo);
    await setDoc(ref, {
      nombre,
      apellido,
      dni,
      telefono,
      direccion,
      genero,
      ciclo,
      turno,
      curso,
      correo,
      rol: "alumnos", 
    });

    console.log("Alumno creado con ID:", correo);
    return true;
  } catch (error) {
    console.error("Error al crear Alumno:", error);
    return false;
  }
};

export function listenById(id, cb, errCb) {
  const ref = doc(db, "alumnos", id);
  return onSnapshot(
    ref,
    (d) => {
      cb(d.exists() ? { id: d.id, ...d.data() } : null);
    },
    errCb
  );
}
