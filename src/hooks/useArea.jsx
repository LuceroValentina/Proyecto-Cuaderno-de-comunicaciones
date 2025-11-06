import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento dentro de la coleccion area en Firestore.
 * 
 * @async
 * @function crearArea
 * @param {Object} params Datos del área a crear.
 * @param {string} params.nombre Nombre del area 
 * @param {string} params.materia Materia asociada al area.
 * @returns {Promise<boolean>} Retorna true si el área se creó correctamente o false si ocurrió un error.
 */
export const crearArea = async ({ nombre, materia }) => {
    try {
        // Agrega un nuevo documento en la colección area con los datos proporcionados.
        await addDoc(collection(db, 'area'), {
            nombre,
            materia
        });

        // Si se ejecuta sin errores retorna true.
        return true;
    } catch (error) {
        // Si ocurre un error al crear el documento se muestra en consola y retorna false.
        console.error("Error al cargar area", error);
        return false;
    }
};
