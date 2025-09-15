import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearTutor = async ({ nombre, apellido, telefono, direccion, parentesco }) => {
    try {
        await addDoc(collection(db, 'tutores'), {
            nombre,
            apellido,
            telefono,
            direccion, 
            parentesco
        });
        console.log("Tutor creado bajo el id:", docRef.id);
        return true;
    } catch (error) {
        console.error("Error al crear Profesor:", error);
        return false;
    }
};
function listenById(id, cb, errCb) {
    const ref = doc(db, "tutores", id);
    return onSnapshot(ref, (d) => {
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}
    