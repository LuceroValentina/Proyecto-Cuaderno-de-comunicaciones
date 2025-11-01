import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/PantallaInicio.css";
import "../../css/Elementos.css";
import { useAuth } from "../../context/AuthContext";

const PantallaInicio = () => {
  const { loginWithGoogle, loginWithEmail, usuario } = useAuth(); 
  const [credenciales, setCredenciales] = useState({ usuario: "", contrasena: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario) {
      navigate("/secciones"); 
    }
  }, [usuario, navigate]);

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/secciones"); 
    } catch (err) {
      console.error("Google Sign-In error:", err?.code, err?.message);
      setError("Error al iniciar sesión con Google");
    }
  };

  const handleLogin = async () => {
    setError("");
    if (!credenciales.usuario || !credenciales.contrasena) {
      setError("Complete usuario y contraseña");
      return;
    }
    try {
      await loginWithEmail(credenciales.usuario, credenciales.contrasena);
      navigate("/secciones");
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
