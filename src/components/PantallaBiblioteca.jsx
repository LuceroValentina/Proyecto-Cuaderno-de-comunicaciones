import React from "react";
import "../css/PantallaBiblioteca.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";


const PantallaBiblioteca = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="titulo">
                <h1>
                    Biblioteca
                </h1>
            </div>
            <div className="botonesOscuros">
                <button className="botonOscuro">Reglamento</button>
                <button className="botonOscuro">Préstamos</button>
            </div>
            <div className="botonesClaros">
                <button className="botonClaro">Crear</button>
                <button className="botonClaro">Firmar</button>
            </div>
            <button
                onClick={() => navigate("/secciones")}
                className="volver fixed bottom-6 left-6 w-20 h-8 bg-[#3d6490] text-white rounded cursor-pointer flex items-center justify-center"
            >
                Volver
            </button>
        </div>

    );

};
export default PantallaBiblioteca;