import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento dentro de la colección calificaciones en Firestore. 
 * @async
 * @function crearCalificaciones
 * @param {Object} params Datos de la calificación a registrar.
 * @param {string} params.id Id del elemento al que pertenece la calificacion
 * @param {number|string} params.calificacion Valor de la calificacion
 * @param {string} params.texto Descripcion de la calificacion
 * @returns {Promise<boolean>} Retorna true si la calificación se guardó correctamente o false si ocurrio un error
 */
export const crearCalificaciones = async ({ id, calificacion, texto }) => {
  try {
    // Agrega un nuevo documento en la colección calificaciones.
    await addDoc(collection(db, 'calificaciones'), {
      id,
      calificacion,
      texto
    });

    // Si la operación es exitosa retorna true
    return true;
  } catch (error) {
    // Si ocurre un error durante la carga, se muestra en consola y retorna false
    console.error("Error al crear calificacion:", error);
    return false;
  }
};
