import React from 'react';
import { useNavigate } from 'react-router-dom';
//import "../css/PantallaSecciones.css";
//import "../css/Elementos.css";

const PantallaSecciones = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <button className="boton" onClick={() => navigate("/seccion_teoria")}>
                Teoría
            </button>
            <button className="boton" onClick={() => navigate("/seccion_taller")}>
                Taller
            </button>
            <button className="boton" onClick={() => navigate("/seccion_biblioteca")}>
                Biblioteca
            </button>
            <button className="boton" onClick={() => navigate("/seccion_edfisica")}>
                Ed.física
            </button>        
            <button className="boton" onClick={() => navigate("/seccion_contactos")}>
            Contactanos
            </button>     
        </div>
    );
}
export default PantallaSecciones;