import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearMaterias = async  ({ nombre, correlativa}) => {
    try {
        await addDoc(collection(db, 'materias'), {
            nombre,
            correlativa
        });
        return true;
    } catch (error) {
        console.error("Error al cargar materias", error);
        return false;
    }
};