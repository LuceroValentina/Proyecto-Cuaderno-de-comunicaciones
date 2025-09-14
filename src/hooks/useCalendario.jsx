import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearCalendario = async ({ dia, mes, estado }) => {
  try {
    await addDoc(collection(db, 'calendario'), {
      dia,
      mes,
      estado
    });
    return true;
  } catch (error) {
    console.error("Error al crear calendario", error);
    return false;
  }
};
