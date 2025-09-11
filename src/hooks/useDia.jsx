import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearDia = async ({ id, dia, mes }) => {
  try {
    await addDoc(collection(db, 'dia'), {//dia, clace de consulta, calendario
      id,
      dia,
      mes
    });
    return true;
  } catch (error) {
    console.error("Error al crear dia:", error);
    return false;
  }
};
