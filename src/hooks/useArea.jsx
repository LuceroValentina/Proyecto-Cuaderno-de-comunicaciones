import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearArea = async ({ nombre, materia }) => {
    try {
        await addDoc(collection(db, 'area'), {
            nombre,
            materia
        });
        return true;
    } catch (error) {
        console.error("Error al cargar area", error);
        return false;
    }
};