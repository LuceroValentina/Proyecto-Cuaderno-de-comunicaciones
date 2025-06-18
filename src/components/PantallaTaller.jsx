import React from "react";
import "../css/PantallaTaller.css";

const PantallaTaller = () => {

    return (
        <div className="container">
            <div className="titulo">
            <h1>
                Taller
            </h1>
            </div>
            <div className="botones">
            <button className="boton">Comunicacion General</button>
            <button className="boton">Normas</button>
             <button className="boton">Retiros</button>
            <button className="boton">Calificaciones Evaluaciones</button>
             <button className="boton">Calificaciones TPS</button>
            <button className="boton">Calificaciones Generales</button>
            </div>
           
            <div className="botones_blancos">
                <button className="crear">Crear</button>
                <button className="firmar">Firmar</button>
            </div>
            <div className="boton-volver">
                <button className="volver">Volver</button>
            </div>
        </div>
    );
}
export default PantallaTaller;