import React from "react";
import "../css/PantallaTeoria.css";
import "../css/Elementos.css";

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
            <div className="cantenedorBotones">
                <button className="boton">Resumen Cuatrimestre</button>
                <button className="boton">Calificaciones</button>
                <button className="boton">Periodos Exámenes</button>
                <button className="boton">Clases de Consultas</button>
                <button className="boton">Inasistencias</button>
            </div>
            <div className="botones_blancos">
                <button className="crear">Crear</button>
                <button className="firmar">Firmar</button>
            </div>
        </div>
    );
}
export default PantallaTeoria;