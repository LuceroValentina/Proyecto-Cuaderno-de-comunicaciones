import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento dentro de la colección dia
 * @async
 * @function crearDia
 * @param {Object} params Datos del día a registrar
 * @param {string} params.dia Numero o nombre del dia
 * @param {string} params.mes Nombre o número del mes
 * @returns {Promise<boolean>} Retorna true si el día se registro correctamente o false si ocurrió un error
 */
export const crearDia = async ({ dia, mes }) => {
  try {
    // Agrega un nuevo documento en la coleccion dia.
    await addDoc(collection(db, 'dia'), {
      dia,
      mes
    });

    // Si la operacion fue exitosa retorna true.
    return true;
  } catch (error) {
    // Si ocurre un error al crear el documento se muestra en consola y retorna false.
    console.error("Error al crear dia:", error);
    return false;
  }
};
