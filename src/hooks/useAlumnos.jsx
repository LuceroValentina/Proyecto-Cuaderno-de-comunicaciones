import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

/**
 * Crea un documento de alumno en la colección alumnos.
 * 
 * @async
 * @function crearAlumno
 * @param {Object} params Datos del alumno a crear.
 * @param {string} params.nombre Nombre del alumno.
 * @param {string} params.apellido Apellido del alumno.
 * @param {string} params.dni DNI del alumno.
 * @param {string} params.telefono Teléfono del alumno.
 * @param {string} params.direccion Dirección del alumno.
 * @param {string} params.genero Género del alumno.
 * @param {string} params.ciclo Ciclo lectivo al que pertenece el alumno.
 * @param {string} params.turno Turno del alumno.
 * @param {string} params.curso Curso del alumno.
 * @param {string} params.correo Correo del alumno (usado como ID del documento en Firestore).
 * @param {string} params.correoTutor Correo del tutor principal del alumno (sirvo para la entrega de notas).
 * @returns {Promise<boolean>} Retorna true si el alumno se creó correctamente o false si ocurrió un error.
 */
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
  correoTutor,
}) => {
  try {
    // Si no hay correo tira un error.
    if (!correo) throw new Error("El correo es obligatorio como ID.");

    // Se crea una referencia al documento.
    const ref = doc(db, "alumnos", correo);

    // Se guarda la información del alumno en Firestore.
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
      correoTutor,
      rol: "alumnos", // Se asigna el rol alumnos automáticamente para los permisos en la app.
    });

    console.log("Alumno creado con ID:", correo);
    return true;
  } catch (error) {
    // Si ocurre un error se muestra en consola y se retorna false.
    console.error("Error al crear Alumno:", error);
    return false;
  }
};

/**
 * Escucha en tiempo real los cambios en un documento dentro de la colección alumnos.
 * 
 * @function listenById
 * @param {string} id id del documento, correo
 * @param {function(Object|null):void} cb Funcion que se ejecuta cuando hay cambios en el documento. Recibe los datos del alumno o `null` si no existe.
 * @param {function(Error):void} errCb Funcion que se ejecuta si ocurre un error durante la escucha.
 * @returns {function} Devuelve una función unsubscribe.
 * 
 */
export function listenById(id, cb, errCb) {
  // Se crea una referencia al documento dentro de la colección alumnos.
  const ref = doc(db, "alumnos", id);

  // Se establece una suscripción a los cambios del documento en tiempo real.
  return onSnapshot(
    ref,
    (d) => {
      // Si el documento existe se devuelve un objeto con su id y datos. Si no existe se envía null.
      cb(d.exists() ? { id: d.id, ...d.data() } : null);
    },
    // Función que maneja errores si la suscripción falla.
    errCb
  );
}
