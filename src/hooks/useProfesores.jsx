import { collection, addDoc, onSnapshot, doc} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearProfesor = async ({ nombre, apellido, dni, telefono, direccion, genero, materia, curso }) => {
    try {
        await addDoc(collection(db, 'profesores'), {
            nombre,
            apellido,
            dni,
            telefono,
            direccion,
            genero,
            materia,
            curso
        });
        return true;
    } catch (error) {
        console.error("Error al crear Profesor:", error);
        return false;
    }
};
function listenById(id, cb, errCb) {
    const ref = doc(db, "profesores", id);
    return onSnapshot(ref, (d) => {
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}