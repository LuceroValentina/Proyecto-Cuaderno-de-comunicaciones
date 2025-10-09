// src/context/AuthContext.jsx
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

  const loginConGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUsuario(user);
      if (user) {
        const rolDetectado = await obtenerRolUsuario(user.email);
        setRol(rolDetectado);
      } else {
        setRol(null);
      }
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  const obtenerRolUsuario = async (email) => {
    const colecciones = ["admins", "profesores", "alumnos", "preceptores", "tutores"];
    for (const col of colecciones) {
      const ref = doc(db, col, email);
      const snap = await getDoc(ref);
      if (snap.exists()) return col; 
    }
    return null; 
  };

  return (
    <AuthContext.Provider value={{ usuario, rol, loginConGoogle, logout, cargando }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};
