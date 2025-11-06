import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo registro dentro de la colección "calendario" en Firestore. 
 * Este hook esta en desuso porque utilizamos una API para generar el componente calendario.
 * @async
 * @function crearCalendario
 * @param {Object} params Datos del dia a registrar en el calendario.
 * @param {string} params.dia Dia del evento o registro.
 * @param {string} params.mes Mes del evento o registro.
 * @param {string} params.estado Estado del dia.
 * @returns {Promise<boolean>} Retorna true si se creo correctamente el documento o false si ocurrió un error.
 */
export const crearCalendario = async ({ dia, mes, estado }) => {
  try {
    // Agrega un nuevo documento a la colección calendario con los datos del día.
    await addDoc(collection(db, 'calendario'), {
      dia,
      mes,
      estado
    });

    // Si se ejecuta correctamente retorna true.
    return true;
  } catch (error) {
    // Si ocurre un error lo muestra en consola y retorna false.
    console.error("Error al crear calendario", error);
    return false;
  }
};
