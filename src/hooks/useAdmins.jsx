import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

/**
 * Crea un documento de administrador en la colección administradores
 * 
 * @async
 * @function crearAdmin
 * @param {Object} params Datos del administrador a crear.
 * @param {string} params.nombre Nombre del administrador.
 * @param {string} params.apellido Apellido del administrador.
 * @param {string} params.dni DNI del administrador.
 * @param {string} params.correo Correo del administrador, que estamos usando como id
 * @param {string} params.telefono Teléfono del administrador.
 * @param {string} params.direccion Dirección del administrador.
 * @returns {Promise<boolean>} Retorna true si se creó correctamente o false si hubo un error.
 */
export const crearAdmin = async ({
    nombre, apellido, dni, correo, telefono, direccion
}) => {
    try {
        if (!correo) throw new Error("El correo es obligatorio como ID.");

        const ref = doc(db, "administradores", correo);
        await setDoc(ref, {
            nombre, apellido, dni, correo, telefono, direccion, rol: "admins"
        });

        console.log("Admin creado con ID:", correo);
        return true;
    } catch (error) {
        console.error("Error al crear Admin:", error);
        return false;
    }
};

/**
 * Escucha en tiempo real los cambios de un documento dentro de la colección administradores
 * 
 * @function listenById
 * @param {string} id id del documento, correo
 * @param {function(Object|null):void} cb Funcion que se ejecuta cuando hay cambios en el documento. Recibe los datos del documento o se pone null si no existe.
 * @param {function(Error):void} errCb Funcion que se ejecuta si ocurre un error durante la suscripción.
 * @returns {function} Devuelve una función para cancelar la suscripción.
  */
export function listenById(id, cb, errCb) {
    const ref = doc(db, "administradores", id);
    return onSnapshot(
        ref,
        (d) => {
            cb(d.exists() ? { id: d.id, ...d.data() } : null);
        },
        errCb
    );
}
