import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearAlumnos = async ({ nombre, apellido, dni, telefono, direccion, genero, ciclo, turno }) => {
    try {
        await addDoc(collection(db, 'alumnos'), {
            nombre,
            apellido,
            dni,
            telefono,
            direccion, 
            genero,
            ciclo,
            turno
        });
        return true;
    } catch (error) {
        console.error("Error al crear Alumno:", error);
        return false;
    }
};