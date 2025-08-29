import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/PantallaInicio.css";
import "../css/Elementos.css";

import { auth } from "../firebase/firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signInWithEmailAndPassword,
} from "firebase/auth";

const PantallaInicio = () => {
    const [error, setError] = useState("");
    const [credenciales, setCredenciales] = useState({
        usuario: "",
        contrasena: "",
    });
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        setError("");
            const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const userData = {
                usuario: result.user.displayName,
                email: result.user.email,
                foto: result.user.photoURL,
                uid: result.user.uid,
                rol: "google_user",
            };
            setUser(userData);
            localStorage.setItem("usuario", JSON.stringify(userData));
            navigate("/");
        } catch (err) {
            console.error("Google Sign-In error:", err?.code, err?.message);

            if (
                err?.code === "auth/popup-blocked" ||
                err?.code === "auth/cancelled-popup-request"
            ) {
                try {
                    await signInWithRedirect(auth, provider);
                    return;
                } catch (e2) {
                    console.error("Redirect fallback error:", e2?.code, e2?.message);
                }
            }
            setError(
                `No se pudo iniciar sesión con Google (${err?.code || "error-desconocido"}).`
            );
        }
    };

    const handleLogin = async () => {
        setError("");
        try {
            if (!credenciales.usuario || !credenciales.contrasena) {
                setError("Complete usuario y contraseña");
                return;
            }

            const result = await signInWithEmailAndPassword(
                auth,
                credenciales.usuario,
                credenciales.contrasena
            );

            const userData = {
                usuario: result.user.displayName || credenciales.usuario,
                email: result.user.email,
                uid: result.user.uid,
                rol: "email_user",
            };
            setUser(userData);
            localStorage.setItem("usuario", JSON.stringify(userData));
            navigate("/");
        } catch (err) {
            console.error("Login error:", err);
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="cuadrado_acceso">
            <h2 className="titulo_acceder">Login</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="contenido">
                
                <button className="btn_google" onClick={handleGoogleLogin}>
                    <img
                        className="logo"
                        src="/imagenes/logoGoogle.png"
                        alt="Logo google"
                    />
                    Continuar con Google
                </button>
            </div>
        </div>
    );
};

export default PantallaInicio;
