import { collection, addDoc } from 'firebase/firestore';
import { db } from '.../firebase/firebase';

/**
 * Crea un nuevo documento dentro de la colección horarios en Firestore.
 * @async
 * @function crearHorarios
 * @param {Object} params Objeto que contiene los datos del horario
 * @param {string} params.id Identificador relacionado
 * @param {string} params.hora Hora asignada al horario
 * @param {string} params.turno Turno del horario
 * @param {string} params.dia Dia correspondiente al horario
 * @param {string} params.materia Nombre o codigo de la materia asignada a ese horario
 * @returns {Promise<boolean>} Retorna true si el horario fue creado correctamente sino false
 */
export const crearHorarios = async ({ id, hora, turno, dia, materia }) => {
  try { 
    // Agrega un nuevo documento a la colección horarios con los datos del horario
    await addDoc(collection(db, 'horarios'), {
      id,
      hora,
      turno,
      dia,
      materia
    });

    // Si todo sale bien retorna true
    return true;
  } catch (error) {
    // Si ocurre un error lo muestra en la consola y retorna false
    console.error("Error al crear horario.", error);
    return false;
  }
};
