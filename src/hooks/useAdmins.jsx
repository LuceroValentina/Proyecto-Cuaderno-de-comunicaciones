import { collection, addDoc, onSnapshot, doc  } from 'firebase/firestore';
import { db } from '../firebase/firebase';


export const crearAdmin = async ({ nombre, apellido, dni, correo, telefono, direccion, rol }) => {
    try {
        const docRef = await addDoc(collection(db, 'administradores'), {
            nombre,
            apellido,
            dni,
            correo,
            telefono,
            direccion, 
            rol
        });
        console.log("Admin creado con ID:", docRef.id);
        return true;
    } catch (error) {
        console.error("Error al crear Admin:", error);
        return false;
    }
};
function listenById(id, cb, errCb) {
    const ref = doc(db, "admin", id);
    return onSnapshot(ref, (d) => {
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}