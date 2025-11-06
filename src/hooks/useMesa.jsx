import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento en la colección "mesa" dentro de Firestore.
 * @async
 * @function crearMesa
 * @param {Object} params Datos de la mesa de examen.
 * @param {string} params.tipomesa Tipo de mesa
 * @param {string} params.materia1 Primera materia incluida en la mesa
 * @param {string} params.materia2 Segunda materia incluida en la mesa
 * @param {string} [params.meteria3] Tercera materia
 * @param {string} [params.metaria4] Cuarta materia 
 * @param {string} params.findeestudio Fecha o fin del periodo de estudio relacionado con la mesa
 * @returns {Promise<boolean>} Retorna tur si la mesa se creo correctamente o false si hubo un error
 */
export const crearMesa = async ({ tipomesa, materia1, materia2, meteria3, metaria4, findeestudio }) => {
  try {
    // Agrega un nuevo documento a la coleccion mesa
    await addDoc(collection(db, 'mesa'), {
      tipomesa,
      materia1,
      materia2,
      materia3,
      materia4,
      findeestudio
    });

    // Devuelve true si la operacion fue exitosa
    return true;
  } catch (error) {
    // En caso de error, lo muestra en la consola y devuelve false
    console.error("Error al cargar mesa de examen:", error);
    return false;
  }
};
