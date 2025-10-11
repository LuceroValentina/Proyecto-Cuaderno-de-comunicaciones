import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState(null);
  const [cargando, setCargando] = useState(true);

  const loginWithGoogle = async () => {
    try {
      if (usuario) {
        alert("Ya estás logueado");
        return;
      }
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error en login con Google:", error);
    }
  };


  const logout = async () => {
    try {
      await signOut(auth);
      setUsuario(null);
      setRol(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCargando(true);
      if (user) {
        setUsuario(user);
        const rolDetectado = await obtenerRolUsuario(user.email);
        setRol(rolDetectado);
      } else {
        setUsuario(null);
        setRol(null);
      }
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  const obtenerRolUsuario = async (email) => {
    const colecciones = ["administradores", "profesores", "alumnos", "preceptores", "tutores"];
    for (const col of colecciones) {
      const ref = doc(db, col, email);
      const snap = await getDoc(ref);
      if (snap.exists()) return col;
    }
    return null;
  };

  return (
    <AuthContext.Provider value={{ usuario, rol, loginWithGoogle, logout, cargando }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};
