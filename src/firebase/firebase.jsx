import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const firebaseConfig = {
  apiKey: "AIzaSyCMli8iw2_IpuoDVZFiGBmvr0K2CZ5lDWY",
  authDomain: "cuadernodecomunicaciones-75199.firebaseapp.com",
  projectId: "cuadernodecomunicaciones-75199",
  storageBucket: "cuadernodecomunicaciones-75199.firebasestorage.app",
  messagingSenderId: "13218076636",
  appId: "1:13218076636:web:759a734dc099e5e133a119"
};

console.log(auth.currentUser);

export { auth };

const app = initializeApp(firebaseConfig);