// Importar las funciones necesarias de los SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMli8iw2_IpuoDVZFiGBmvr0K2CZ5lDWY",
  authDomain: "cuadernodecomunicaciones-75199.firebaseapp.com",
  projectId: "cuadernodecomunicaciones-75199",
  storageBucket: "cuadernodecomunicaciones-75199.appspot.com", // corregido
  messagingSenderId: "13218076636",
  appId: "1:13218076636:web:759a734dc099e5e133a119"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para usar en el resto del proyecto
export { auth, db, GoogleAuthProvider };
