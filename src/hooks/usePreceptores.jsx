import { db } from '../firebase/firebase';
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export const crearPreceptor = async ({
    nombre,
    apellido,
    dni,
    telefono,
    direccion,
    genero,
    curso,
    turno,
    correo
}) => {
    try {
        if (!correo) throw new Error("El correo es obligatorio como ID.");

        const ref = doc(db, "preceptores", correo);
        await setDoc(ref, {
            nombre,
            apellido,
            dni,
            telefono,
            direccion,
            genero,
            curso,
            turno,
            correo,
            rol: "preceptor"
        });

        console.log("Preceptor creado con ID:", correo);
        return true;
    } catch (error) {
        console.error("Error al crear Preceptor:", error);
        return false;
    }
};

export function listenById(id, cb, errCb) {
    const ref = doc(db, "preceptores", id);
    return onSnapshot(
        ref,
        (d) => {
            cb(d.exists() ? { id: d.id, ...d.data() } : null);
        },
        errCb
    );
}

