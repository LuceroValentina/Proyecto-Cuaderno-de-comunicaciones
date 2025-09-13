import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearAlumno = async ({ nombre, apellido, dni, telefono, direccion, genero, ciclo, turno, curso }) => {
    try {
        await addDoc(collection(db, 'alumnos'), {
            nombre,
            apellido,
            dni,
            telefono,
            direccion, 
            genero,
            ciclo,
            turno,
            curso
        });
        return true;
    } catch (error) {
        console.error("Error al crear Alumno:", error);
        return false;
    }
};