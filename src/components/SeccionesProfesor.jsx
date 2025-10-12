import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Elementos.css";
import "../css/PantallaSecciones.css";

const DashboardProfesor = () => {
    const navigate = useNavigate();
    return (
        <div className='containerSecciones'>
            <h1 className='titulo'>Seleccione la Sección a la que pertenece:</h1>
            <div className='container-botones'>
                <button className="botonOscuro" onClick={() => navigate("/seccion_teoria")}>
                    Teoría
                </button>
                <button className="botonOscuro" onClick={() => navigate("/seccion_taller")}>
                    Taller
                </button>
                <button className="botonOscuro" onClick={() => navigate("/seccion_edfisica")}>
                    Ed.física
                </button>

            </div>
            <button className="contactanos" onClick={() => navigate("/seccion_contactos")}>
                Contactanos
            </button>
        </div>
    );
}
export default DashboardProfesor;