import {collection, addDoc} from 'firebase/firestore';
import { db } from '.../firebase/firebase';

export const crearHorarios = async ({ id, hora, turno, dia, materia }) => {
try { 
    await addDoc(collection(db, 'horarios'), {
id,
hora,
turno,
dia,
materia
 });
  return true;
} catch (error) {
console.error("Error al crear horario.", error);
return false;
  }
};


