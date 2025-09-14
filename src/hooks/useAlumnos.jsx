import { collection, addDoc, onSnapshot, doc  } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearAlumno = async ({ nombre, apellido, dni, telefono, direccion, genero, ciclo, turno, curso }) => {
    try {
        const docRef = await addDoc(collection(db, 'alumnos'), {
            nombre,
            apellido,
            dni,
            telefono,
            direccion, 
            genero,
            ciclo,
            turno,
            curso
        });
        console.log("Alumno creado con ID:", docRef.id);
        return true;
    } catch (error) {
        console.error("Error al crear Alumno:", error);
        return false;
    }
};
function listenById(id, cb, errCb) {
    const ref = doc(db, "alumnos", id);
    return onSnapshot(ref, (d) => {
        cb(d.exists() ? { id: d.id, ...d.data() } : null);
    }, errCb);
}