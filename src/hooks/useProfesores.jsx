import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento en la colección profesores dentro de Firestore.
 * @async
 * @function crearProfesor
 * @param {Object} params Objeto con los datos del profesor a registrar
 * @param {string} params.nombre Nombre del profesor
 * @param {string} params.apellido Apellido del profesor
 * @param {string|number} params.dni DNI del profesor
 * @param {string} params.telefono Telefono de contacto
 * @param {string} params.direccion Dirección del domicilio del profesor
 * @param {string} params.genero Genero del profesor
 * @param {string} params.materia Materia asignada al profesor
 * @param {string} params.curso Curso en el que da clases
 * @param {string} params.correo Correo electrónico del profesor que se usa como id 
 * @returns {Promise<boolean>} Devuelve true si el profesor fue creado correctamente o false si hubo un error
 */
export const crearProfesor = async ({
  nombre,
  apellido,
  dni,
  telefono,
  direccion,
  genero,
  materia,
  curso,
  correo,
}) => {
  try {
    // Verifica que el correo este definido 
    if (!correo) throw new Error("El correo es obligatorio como ID.");

    // Crea una referencia al documento dentro de la colección profesores
    const ref = doc(db, "profesores", correo);

    // Guarda los datos del profesor en Firestore
    await setDoc(ref, {
      nombre,
      apellido,
      dni,
      telefono,
      direccion,
      genero,
      materia,
      curso,
      correo,
      rol: "profesor"
    });

    console.log("Profesor creado con ID:", correo);
    return true;
  } catch (error) {
    // Si ocurre un error se muestra en consola y devuelve false
    console.error("Error al crear Profesor:", error);
    return false;
  }
};

/**
 * Escucha en tiempo real los cambios en un documento específico de la colección profesores
 * @function listenById
 * @param {string} id id del documento a escuchar
 * @param {function(Object|null): void} cb Funcion que recibe los datos actualizados o null si el documento no existe
 * @param {function(Error): void} errCb Funcion que maneja los errores durante la suscripcion
 * @returns {function(): void} Devuelve una función unsubscribe
 */
export function listenById(id, cb, errCb) {
  // Crea una referencia al documento dentro de la coleccion profesores
  const ref = doc(db, "profesores", id);

  // Escucha los cambios en tiempo real en el documento indicado
  return onSnapshot(
    ref,
    (d) => {
      // Si el documento existe devuelve los datos sino null
      cb(d.exists() ? { id: d.id, ...d.data() } : null);
    },
    errCb
  );
}
