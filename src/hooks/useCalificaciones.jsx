import {collection, addDoc} from 'firebase/firestore';
import { db }from '.../firebase/firebase';

export const crearCalificaciones = async ({ id, calificacion, texto  }) => {
try {
await addDoc(collection(db, 'calificaciones'), {//
id,
calificacion,
texto
});

return true;
} catch(error){
console.error("Error al crear calificacion:", error);
return false;
}

};
