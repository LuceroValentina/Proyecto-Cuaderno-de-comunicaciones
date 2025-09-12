import {collection, addDoc} from 'firebase/firestore';
import { db }from '.../firebase/firebase';

export const crearNotas = async ({ id, nota, texto  }) => {
try {
await addDoc(collection(db, 'notas'), {//
id,
nota,
texto
});

return true;
} catch(error){
console.error("Error al crear notas:", error);
return false;
}

};
