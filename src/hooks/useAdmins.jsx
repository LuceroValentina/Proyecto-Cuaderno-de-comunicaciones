import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const crearAdmin = async ({
    nombre, apellido, dni, correo, telefono, direccion, rol
}) => {
    try {
        if (!correo) throw new Error("El correo es obligatorio como ID.");

        const ref = doc(db, "administradores", correo);
        await setDoc(ref, {
            nombre, apellido, dni, correo, telefono, direccion, rol: "admins"
        });

        console.log("Admin creado con ID:", correo);
        return true;
    } catch (error) {
        console.error("Error al crear Admin:", error);
        return false;
    }
};

export function listenById(id, cb, errCb) {
    const ref = doc(db, "administradores", id);
    return onSnapshot(
        ref,
        (d) => {
            cb(d.exists() ? { id: d.id, ...d.data() } : null);
        },
        errCb
    );
}