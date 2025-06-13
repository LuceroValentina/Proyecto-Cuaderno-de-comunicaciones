import React, {useState} from 'react';
import "../css/PantallaInicio.css";

const PantallaInicio = () => {
    return (
        <div className="cuadrado_acceso">
            <div className="contenido">
            <h1 className="titulo_acceder">Acceder con:</h1>
            <button className="btn_google">
                <img className="logo" src="/imagenes/logoGoogle.png" alt="Logo google" />
                Continuar con Google   
            </button>
            </div>
        </div>
    );
}
export default PantallaInicio;