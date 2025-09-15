import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearAdmins = async ({ nombre, apellido, telefono, direccion, rol }) => {
    try {
        await addDoc(collection(db, 'admins'), {
            nombre,
            apellido,
            telefono,
            direccion, 
            rol
        });
        console.log("Admin creado bajo el id:", docRef.id);
        return true;
    } catch (error) {
        console.error("Error al crear Admin:", error);
        return false;
    }
};
function listenById(id, cb, errCb) {
    const ref = doc(db, "admins", id);
    return onSnapshot(ref, (d) => {
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}
