import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearPreceptor = async ({ nombre, apellido, dni, telefono, direccion, genero, curso, turno }) => {
    try {
        await addDoc(collection(db, 'preceptores'), {
            nombre,
            apellido,
            dni,
            telefono,
            direccion, 
            genero,
            curso,
            turno
        });
        return true;
    } catch (error) {
        console.error("Error al crear preceptor:", error);
        return false;
    }
};