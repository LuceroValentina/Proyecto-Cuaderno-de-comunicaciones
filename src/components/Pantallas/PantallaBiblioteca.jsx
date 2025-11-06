/**
 * @file PantallaBiblioteca.jsx
 * @description Pantalla principal de la sección Biblioteca.
 * Contiene botones para acceder a funcionalidades relacionadas con el reglamento,
 * préstamos y acciones administrativas, además de un botón para volver a la pantalla de secciones.
 */
import React from "react";
import "../../css/PantallaBiblioteca.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";

/**
 * @component PantallaBiblioteca
 * @description Renderiza la interfaz de la sección de Biblioteca, muestra
 * diferentes opciones y un botón para regresar al menú de secciones.
 * 
 * @returns {JSX.Element} Estructura visual de la pantalla de Biblioteca.
 */
const PantallaBiblioteca = () => {
    /** 
     * @constant navigate
     * @type {Function}
     * @description Hook de React Router que permite la navegación programática entre rutas.
     */
    const navigate = useNavigate();

    return (
        <div className="containerBiblio">
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