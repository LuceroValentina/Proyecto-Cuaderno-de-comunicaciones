import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Elementos.css";
import "../css/PantallaSecciones.css";
import { useAuth } from "../context/AuthContext";

const PantallaSecciones = () => {
    const navigate = useNavigate();
    const { rol, cargando } = useAuth(); // traemos rol directamente del AuthContext

    if (cargando) return <p>Cargando...</p>; // espera a que Firebase termine de cargar

    return (
        <div className='containerSecciones'>
            <h1 className='titulo'>Seleccione la Sección:</h1>
            <div className='container-botones'>
                <button className="botonOscuro" onClick={() => navigate("/seccion_teoria")}>
                    Teoría
                </button>
                <button className="botonOscuro" onClick={() => navigate("/seccion_taller")}>
                    Taller
                </button>
                <button className="botonOscuro" onClick={() => navigate("/seccion_biblioteca")}>
                    Biblioteca
                </button>
                <button className="botonOscuro" onClick={() => navigate("/seccion_edfisica")}>
                    Ed.física
                </button>
            </div>

            <button className="contactanos" onClick={() => navigate("/seccion_contactos")}>
                Contactanos
            </button>


            {rol === "administradores" && (
                <button className="contactanos" onClick={() => navigate("/dashboard-admin")}>
                    Panel de control
                </button>
            )}

        </div>
    );
}

export default PantallaSecciones;
