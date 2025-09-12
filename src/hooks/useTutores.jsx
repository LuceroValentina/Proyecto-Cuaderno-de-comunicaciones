import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearTutores = async ({ id, nombre, apellido, telefono, direccion, parentesco }) => {
    try {
        await addDoc(collection(db, 'tutores'), {
            id, 
            nombre,
            apellido,
            telefono,
            direccion, 
            parentesco
        });
        return true;
    } catch (error) {
        console.error("Error al crear Tutor:", error);
        return false;
    }
};