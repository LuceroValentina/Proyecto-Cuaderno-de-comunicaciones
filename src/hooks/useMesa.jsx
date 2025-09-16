import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearMesa = async ({ tipomesa, materia1, materia2, meteria3, metaria4, findeestudio}) => {
    try {
        await addDoc(collection(db, 'mesa'), {
            tipomesa, 
            materia1,
            materia2,
            meteria3,
            metaria4, 
            findeestudio           
        });
        return true;
    } catch (error) {
        console.error("Error al cargar mesa de examen:", error);
        return false;
    }
};