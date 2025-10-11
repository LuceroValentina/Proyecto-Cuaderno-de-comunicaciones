import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Elementos.css";
import "../css/PantallaSecciones.css";

const DashboardPreceptor = () => {
    const navigate = useNavigate();
    return (
        <div className='container-secciones'>
            <h1 className='titulo'>Seleccione la sección de preceptoria a la que quiere ingresar:</h1>
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
export default DashboardPreceptor;