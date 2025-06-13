import React from "react";
import "../css/PantallaTeoria.css";

const PantallaTeoria = () => {

    return (
        <div className="container">
            <div className="titulo">
            <h1>
                Teoria
            </h1>
            </div>
            <div className="botones">
            <button className="boton">Retiros</button>
            <button className="boton">Evaluaciones y TPS</button>
             <button className="boton">Comunicación General</button>
            <button className="boton">Registros de Firmas</button>
             <button className="boton">Horarios de Clases</button>
            <button className="boton">Vestimenta</button>
            </div>
            <div className="botones_blancos">
                <button className="crear">Crear</button>
                <button className="firmar">Firmar</button>
            </div>
        </div>
    );
}
export default PantallaTeoria;