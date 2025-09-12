import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearFirmas = async ({ id, firma, aclaracion, responsable }) => {
    try {
        await addDoc(collection(db, 'firmas'), {
            id, 
            firma,
            aclaracion,
            responsable
        });
        return true;
    } catch (error) {
        console.error("Error al crear la firma.", error);
        return false;
    }
};