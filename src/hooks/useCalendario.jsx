import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearCalendario = async ({ id, dia, mes, estado }) => {
  try {
    await addDoc(collection(db, 'calendario'), {//dia, clace de consulta, calendario
      id,
      dia,
      mes,
      estado
    });
    return true;
  } catch (error) {
    console.error("Error al crear calendario:", error);
    return false;
  }
};
