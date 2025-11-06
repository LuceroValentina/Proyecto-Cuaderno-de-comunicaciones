import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

/**
 * Crea un nuevo documento en la colección "tutores" dentro de Firestore.
 * @async
 * @function crearTutor
 * @param {Object} params Objeto con los datos del tutor 
 * @param {string} params.nombre Nombre del tutor
 * @param {string} params.apellido Apellido del tutor
 * @param {string} params.telefono Numero de teléfono del tutor
 * @param {string} params.correo Correo electrónico del tutor
 * @param {string} params.direccion Dirección del domicilio del tutor
 * @param {string} params.parentesco Relacion con el alumno
 * @returns {Promise<boolean>} Devuelve true si el tutor fue creado correctamente false si ocurrio un error
 */
export const crearTutor = async ({
  nombre,
  apellido,
  telefono,
  correo,
  direccion,
  parentesco
}) => {
  try {
    // Verifica que se haya proporcionado un correo electronico como ID
    if (!correo) throw new Error("El correo es obligatorio como ID.");

    // Crea una referencia al documento dentro de la colección tutores
    const ref = doc(db, "tutores", correo);

    // Guarda los datos del tutor en Firestore
    await setDoc(ref, {
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      parentesco,
      rol: "tutor"
    });

    console.log("Tutor creado con ID:", correo);
    return true;
  } catch (error) {
    // Muestra el error en consola si ocurre un fallo
    console.error("Error al crear tutor:", error);
    return false;
  }
};

/**
 * Escucha en tiempo real los cambios en un documento específico de la colección tutores
 * @function listenById
 * @param {string} id id del documento
 * @param {function(Object|null): void} cb Funcion que recibe los datos actualizados o null si el documento no existe
 * @param {function(Error): void} errCb Funcion que maneja los errores durante la escucha
 * @returns {function(): void} Devuelve una función unsubscribe
 */
export function listenById(id, cb, errCb) {
  // Crea una referencia al documento dentro de la coleccion tutores
  const ref = doc(db, "tutores", id);

  // Escucha los cambios en tiempo real del documento especificado
  return onSnapshot(
    ref,
    (d) => {
      // Si el documento existe devuelve sus datos sino null
      cb(d.exists() ? { id: d.id, ...d.data() } : null);
    },
    errCb
  );
}
