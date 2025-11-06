import { db } from '../firebase/firebase';
import { doc, setDoc, onSnapshot } from "firebase/firestore";

/**
 * Crea un nuevo documento en la colección "preceptores" dentro de Firestore.
 * Este hook registra un nuevo preceptor utilizando su correo electronico como ID único.
 * @async
 * @function crearPreceptor
 * @param {Object} params Objeto con los datos del preceptor a registrar
 * @param {string} params.nombre Nombre del preceptor
 * @param {string} params.apellido Apellido del preceptor
 * @param {string|number} params.dni DNI del preceptor
 * @param {string} params.telefono Teléfono de contacto
 * @param {string} params.direccion Dirección del domicilio
 * @param {string} params.genero Genero del preceptor
 * @param {string} params.curso Curso asignado al preceptor
 * @param {string} params.turno Turno del precep
 * @param {string} params.correo Correo electronico del preceptor
 * @returns {Promise<boolean>} Devuelve true si el preceptor fue creado correctamente o false si ocurre un error.
 */
export const crearPreceptor = async ({
  nombre,
  apellido,
  dni,
  telefono,
  direccion,
  genero,
  curso,
  turno,
  correo
}) => {
  try {
    // Verifica que se haya un correo
    if (!correo) throw new Error("El correo es obligatorio como ID.");

    // Crea una referencia al documento dentro de la colección preceptores
    const ref = doc(db, "preceptores", correo);

    // Guarda los datos del preceptor en Firestore
    await setDoc(ref, {
      nombre,
      apellido,
      dni,
      telefono,
      direccion,
      genero,
      curso,
      turno,
      correo,
      rol: "preceptor"
    });

    console.log("Preceptor creado con ID:", correo);
    return true;
  } catch (error) {
    // Muestra el error en consola y devuelve false si ocurre un fallo
    console.error("Error al crear Preceptor:", error);
    return false;
  }
};

/**
 * Escucha en tiempo real los cambios en un documento específico de la colección preceptores
 * @function listenById
 * @param {string} id id del documento
 * @param {function(Object|null): void} cb Funcion que recibe los datos actualizados del documento o null
 * @param {function(Error): void} errCb Funcion que se ejecuta si ocurre un error durante la escucha
 * @returns {function(): void} Devuelve una funcion que permite cancelar la suscripcion
 */
export function listenById(id, cb, errCb) {
  // Crea una referencia al documento dentro de la coleccion preceptores
  const ref = doc(db, "preceptores", id);

  // Escucha en tiempo real los cambios en el documento y ejecuta la funcion
  return onSnapshot(
    ref,
    (d) => {
      // Si el documento existe envia los datos sino null
      cb(d.exists() ? { id: d.id, ...d.data() } : null);
    },
    errCb
  );
}
