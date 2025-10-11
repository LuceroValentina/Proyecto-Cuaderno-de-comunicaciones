import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/firebase';

export const crearProfesor = async ({
    nombre,
    apellido,
    dni,
    telefono,
    direccion,
    genero,
    materia,
    curso,
    correo,
}) => {
    try {
        if (!correo) throw new Error("El correo es obligatorio como ID.");

        const ref = doc(db, "profesores", correo);
        await setDoc(ref, {
            nombre,
            apellido,
            dni,
            telefono,
            direccion,
            genero,
            materia,
            curso, correo
        });

        console.log("Profesor creado con ID:", correo);
        return true;
    } catch (error) {
        console.error("Error al crear Profesor:", error);
        return false;
    }
};

export function listenById(id, cb, errCb) {
    const ref = doc(db, "profesores", id);
    return onSnapshot(
        ref,
        (d) => {
            cb(d.exists() ? { id: d.id, ...d.data() } : null);
        },
        errCb
    );
}


