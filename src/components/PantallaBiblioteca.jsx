import React from "react";
import "../css/PantallaBiblioteca.css";
import "../css/Elementos.css";

const PantallaBiblioteca = () => {

    return (
        <div className="container">
            <div className="titulo">
            <h1>
                Biblioteca
            </h1>
            </div>
            <div className="botones">
            <button className="boton">Reglamento</button>
            <button className="boton">Préstamos</button>
            </div>
            <div className="botones_blancos">
                <button className="crear">Crear</button>
                <button className="firmar">Firmar</button>
            </div>
        </div>
    );
}
export default PantallaBiblioteca;