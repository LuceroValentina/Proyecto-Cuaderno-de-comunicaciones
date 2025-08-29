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
            <div className="botonesOscuros">
            <button className="botonOscuro">Reglamento</button>
            <button className="botonOscuro">Préstamos</button>
            </div>
            <div className="botonesClaros">
                <button className="botonClaro">Crear</button>
                <button className="botonClaro">Firmar</button>
            </div>
        </div>
    );
    <button class="boton-volver" onClick={() => window.history.back()}>Volver</button>
}
export default PantallaBiblioteca;