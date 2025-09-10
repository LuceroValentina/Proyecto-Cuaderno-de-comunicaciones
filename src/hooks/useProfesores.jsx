import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearProfesores = async ({ id, nombre, apellido, telefono, direccion, genero, materia }) => {
    try {
        await addDoc(collection(db, 'usuarios'), {
            id, 
            nombre,
            apellido,
            telefono,
            direccion, 
            genero,
            materia
        });
        return true;
    } catch (error) {
        console.error("Error al crear Profesor:", error);
        return false;
    }
};