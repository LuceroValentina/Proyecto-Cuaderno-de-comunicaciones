import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const crearClasedeConsulta = async ({ id, dia, horario, materia, profesor }) => {
  try {
    await addDoc(collection(db, 'clase de consulta'), {//dia, clace de consulta, calendario
      id,
      dia,
      horario,
      materia,
      profesor
    });
    return true;
  } catch (error) {
    console.error("Error al crear clase de consulta:", error);
    return false;
  }
};
