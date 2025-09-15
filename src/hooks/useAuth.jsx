import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const useAuth = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('usuario'));
    if (storedUser) {
      const fetchUserData = async () => {
        const colecciones = {
          profesor: 'profesores',
          tutor: 'tutores',
          alumno: 'alumnos',
          admin: 'admins',
          preceptor: 'preceptores'
        };

        const coleccion = colecciones[storedUser.rol];
        if (!coleccion) return; 

        const docRef = doc(db, coleccion, storedUser.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUsuario({ id: docSnap.id, rol: storedUser.rol, ...docSnap.data() });
        }
      };
      fetchUserData();
    }
  }, []);

  return { usuario };
};
