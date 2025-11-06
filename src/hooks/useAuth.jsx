import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

/**
 * Hook que obtiene y mantiene los datos del usuario autenticado desde Firestore.
 * Lee la información del usuario guardada en localStorage
 * Busca los datos actualizados del usuario en la colección.
 * Devuelve el usuario con su información y rol si existe. Para permitirle la navegacion y habilitarle las funciones segun su rol.
 * 
 * @function useAuth
 * @returns {Object} Retorna un objeto con la propiedad:
 * @returns {Object|null} return.usuario - Datos del usuario autenticado o null si no hay sesión activa.
 */
export const useAuth = () => {
  // Estado que guarda los datos del usuario actual.
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Intenta obtener los datos guardados del usuario en el almacenamiento LocalStorage
    const storedUser = JSON.parse(localStorage.getItem('usuario'));

    // Si hay un usuario almacenado intenta cargar sus datos desde Firestore.
    if (storedUser) {
      const fetchUserData = async () => {
        // Mapeo entre roles y nombres de colecciones en Firestore.
        const colecciones = {
          profesor: 'profesores',
          tutor: 'tutores',
          alumno: 'alumnos',
          admin: 'admins',
          preceptor: 'preceptores'
        };

        // Determina la colección correspondiente al rol del usuario.
        const coleccion = colecciones[storedUser.rol];
        if (!coleccion) return; // Si el rol no existe, termina la función.

        // Crea una referencia al documento del usuario en la colección correcta.
        const docRef = doc(db, coleccion, storedUser.id);

        // Obtiene el documento del usuario desde Firestore.
        const docSnap = await getDoc(docRef);

        // Si el documento existe guarda los datos del usuario.
        if (docSnap.exists()) {
          setUsuario({ id: docSnap.id, rol: storedUser.rol, ...docSnap.data() });
        }
      };

      // Llama a la función que obtiene los datos del usuario.
      fetchUserData();
    }
  }, []); // Se ejecuta una sola vez al montar el componente.

  // Retorna el usuario autenticado.
  return { usuario };
};
