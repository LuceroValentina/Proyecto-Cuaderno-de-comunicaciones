import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearFirmas = async ({ id, firma, aclaracion, responsable }) => {
    try {
        await addDoc(collection(db, 'firmas'), {
            id, 
            firma,
            aclaracion,
            responsable
        });
        console.log("Firma creada bajo el id:", docRef.id);
        return true;
    } catch (error) {
        console.error("Error al crear la firma.", error);
        return false;
    }
};
function listenById(id, cb, errCb) {
    const ref = doc(db, "firmas", id);
    return onSnapshot(ref, (d) => {
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}
