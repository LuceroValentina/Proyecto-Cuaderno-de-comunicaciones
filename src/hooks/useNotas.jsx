import { collection, addDoc } from 'firebase/firestore';
import { db } from '.../firebase/firebase';

/**
 * Crea un nuevo documento en la colección notas dentro de Firestore.
 * @async
 * @function crearNotas
 * @param {Object} params Objeto con los datos de la nota a registrar
 * @param {string} params.id Id 
 * @param {string|number} params.nota Calificación o valor de la nota 
 * @param {string} params.texto Comentario o descripción adicional de la nota
 * @returns {Promise<boolean>} Retorna true si la nota se creó correctamente o false si ocurrio un error
 */
export const crearNotas = async ({ id, nota, texto }) => {
  try {
    // Agrega un nuevo documento a la coleccion notas 
    await addDoc(collection(db, 'notas'), {
      id,
      nota,
      texto
    });

    // Devuelve true si la creación fue exitosa
    return true;
  } catch (error) {
    // Muestra en consola el error si ocurre
    console.error("Error al crear notas:", error);
    return false;
  }
};
