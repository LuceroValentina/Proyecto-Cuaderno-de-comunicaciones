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
            <button className="botonOscuro">Retiros</button>
            <button className="botonOscuro">Evaluaciones y TPS</button>
            <button className="botonOscuro">Comunicación General</button>
            <button className="botonOscuro">Registros de Firmas</button>
            <button className="botonOscuro">Horarios de Clases</button>
            <button className="botonOscuro">Vestimenta</button>
            </div>
            <div className="cantenedorbotones">
                <button className="botonOscuro">Resumen Cuatrimestre</button>
                <button className="botonOscuro">Calificaciones</button>
                <button className="botonOscuro">Periodos Exámenes</button>
                <button className="botonOscuro">Clases de Consultas</button>
                <button className="botonOscuro">Inasistencias</button>
            </div>
            <div className="botonesClaros">
                <button className="botonClaro">Crear</button>
                <button className="botonClaro">Firmar</button>
            </div>
        </div>
    );
}
export default PantallaTeoria;