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
             <button onClick={() => navigate("/secciones")}className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer">Volver</button>
        </div>
        
    );

};
export default PantallaBiblioteca;