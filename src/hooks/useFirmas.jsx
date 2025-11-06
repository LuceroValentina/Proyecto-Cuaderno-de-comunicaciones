import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Crea un nuevo documento dentro de la colección "firmas" en Firestore.
 * Actualmente esta en desuso este hook porque se reo el componente firmar con Dropbox.
 * @async
 * @function crearFirma
 * @param {Object} params Datos de la firma a crear
 * @param {string} params.firma Firma
 * @param {string} params.aclaracion Aclaracion o descripcion adicional
 * @param {string} params.responsable Nombre o identificacion de la persona responsable de la firma
 * @returns {Promise<boolean>} Retorna true si la firma se creó correctamente o false si ocurrio un error
 */
export const crearFirma = async ({ firma, aclaracion, responsable }) => {
    try {
        // Agrega un nuevo documento a la coleccion firmas con los datos proporcionados.
        await addDoc(collection(db, 'firmas'), {
            firma,
            aclaracion,
            responsable
        });

        // Si todo salio bien retorna true.
        return true;
    } catch (error) {
        // Si ocurre un error se muestra en consola y se retorna false.
        console.error("Error al crear la firma.", error);
        return false;
    }
};

/**
 * Escucha en tiempo real los cambios en un documento de la coleccion firmas
 * @function listenById
 * @param {string} id id del documento
 * @param {function(Object|null):void} cb Función que se ejecuta cuando hay cambios en el documento. Recibe los datos del documento o null si no existe
 * @param {function(Error):void} errCb Funcion que se ejecuta si ocurre un error durante la suscripcion
 * @returns {function} Retorna una función unsubscribe
 */
function listenById(id, cb, errCb) {
    // Crea una referencia al documento dentro de la coleccion firmas
    const ref = doc(db, "firmas", id);

    // Establece una suscripcion a los cambios del documento en tiempo real
    return onSnapshot(ref, (d) => {
        // Si el documento existe se envían sus datos sino null.
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}
