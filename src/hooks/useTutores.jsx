import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const crearTutor = async ({
    nombre, apellido, telefono, correo, direccion, parentesco
}) => {
    try {
        if (!correo) throw new Error("El correo es obligatorio como ID.");

        const ref = doc(db, "tutores", correo);
        await setDoc(ref, {
            nombre, apellido, telefono, correo, direccion, parentesco, rol: "tutor"
        });

        console.log("Tutor creado con ID:", correo);
        return true;
    } catch (error) {
        console.error("Error al crear tutor:", error);
        return false;
    }
};

export function listenById(id, cb, errCb) {
    const ref = doc(db, "tutores", id);
    return onSnapshot(
        ref,
        (d) => {
            cb(d.exists() ? { id: d.id, ...d.data() } : null);
        },
        errCb
    );
}