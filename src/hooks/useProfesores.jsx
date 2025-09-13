import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearProfesor = async ({ nombre, apellido, dni, telefono, direccion, genero, materia, curso }) => {
    try {
        await addDoc(collection(db, 'profesores'), {
            nombre,
            apellido,
            dni,
            telefono,
            direccion,
            genero,
            materia,
            curso
        });
        return true;
    } catch (error) {
        console.error("Error al crear Profesor:", error);
        return false;
    }
};