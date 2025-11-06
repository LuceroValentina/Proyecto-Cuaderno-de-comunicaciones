import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento dentro de la colección clase de consulta
 * @async
 * @function crearClasedeConsulta
 * @param {Object} params Datos de la clase de consulta a crear
 * @param {string} params.dia Dia en que se dicta la clase de consulta
 * @param {string} params.horario Horario de la clase
 * @param {string} params.materia Nombre de la materia de la clase de consulta 
 * @param {string} params.profesor Nombre o ID del profesor a cargo de la clase de consulta
 * @returns {Promise<boolean>} Retorna true si la clase de consulta se creo correctamente o false si ocurrio un error
 */
export const crearClasedeConsulta = async ({ dia, horario, materia, profesor }) => {
  try {
    // Agrega un nuevo documento a la colección clase de consulta
    await addDoc(collection(db, 'clase de consulta'), {
      dia,
      horario,
      materia,
      profesor
    });

    // Si la operacion se realiza bien retorna true.
    return true;
  } catch (error) {
    // Si ocurre un error durante la creación del documento lo muestra en consola y retorna false.
    console.error("Error al crear clase de consulta:", error);
    return false;
  }
};
