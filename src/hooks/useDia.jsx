import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearDia = async ({ dia, mes }) => {
  try {
    await addDoc(collection(db, 'dia'), {
      dia,
      mes
    });
    return true;
  } catch (error) {
    console.error("Error al crear dia:", error);
    return false;
  }
};
