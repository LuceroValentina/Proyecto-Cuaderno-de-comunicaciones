import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearProfesores = async ({ id, nombre, apellido, dni, telefono, direccion, genero, materia }) => {
    try {
        await addDoc(collection(db, 'profesores'), {
            id, 
            nombre,
            apellido,
            dni,
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