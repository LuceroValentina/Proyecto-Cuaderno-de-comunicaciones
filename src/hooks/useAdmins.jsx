import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearAdmins = async ({ id, nombre, apellido, telefono, direccion, rol }) => {
    try {
        await addDoc(collection(db, 'admins'), {
            id, 
            nombre,
            apellido,
            telefono,
            direccion, 
            rol
        });
        return true;
    } catch (error) {
        console.error("Error al crear Admin:", error);
        return false;
    }
};