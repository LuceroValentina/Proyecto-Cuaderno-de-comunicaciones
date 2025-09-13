import { db } from '../firebase/firebase';
import { collection, addDoc, onSnapshot, doc } from 'firebase/firestore';

export const crearPreceptor = async ({ nombre, apellido, dni, telefono, direccion, genero, curso, turno }) => {
    try {
        await addDoc(collection(db, 'preceptores'), {
            nombre,
            apellido,
            dni,
            telefono,
            direccion,
            genero,
            curso,
            turno
        });
        return true;
    } catch (error) {
        console.error("Error al crear preceptor:", error);
        return false;

    }
};
function listenById(id, cb, errCb) {
    const ref = doc(db, "preceptores", id);
    return onSnapshot(ref, (d) => {
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}