import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento en la colección materias dentro de Firestore.
 * @async
 * @function crearMaterias
 * @param {Object} params Objeto con los datos de la materia a registrar
 * @param {string} params.nombre Nombre de la materia
 * @param {string} [params.correlativa] Materia correlativa
 * @returns {Promise<boolean>} Retorna true si la materia se creo correctamente o false si ocurrió un error
 */
export const crearMaterias = async ({ nombre, correlativa }) => {
  try {
    // Agrega un nuevo documento a la colección materias
    await addDoc(collection(db, 'materias'), {
      nombre,
      correlativa
    });

    // Si se crea correctamente devuelve true.
    return true;
  } catch (error) {
    // En caso de error muestra el mensaje en consola y devuelve false.
    console.error("Error al cargar materias", error);
    return false;
  }
};
