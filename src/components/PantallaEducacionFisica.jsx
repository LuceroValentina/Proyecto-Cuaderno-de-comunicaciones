import React from "react";
import "../css/PantallaEducacionFisica.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";


const PantallaEducacionFisica = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="titulo">
                <h1>
                    Educacion Física
                </h1>
            </div>
            <div className="botonesOscuros">
                <button className="botonOscuro">Información General</button>
                <button className="botonOscuro">Normas</button>
                <button className="botonOscuro">Ficha médica</button>
            </div>
            <button
                onClick={() => navigate("/secciones")}
                className="volver fixed bottom-6 right-6 w-20 h-8 bg-[#3d6490] text-white rounded cursor-pointer flex items-center justify-center"
            >
                Volver
            </button>





        </div>
    );
};
export default PantallaEducacionFisica;