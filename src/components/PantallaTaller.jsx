import React from "react";
import "../css/PantallaTaller.css";
import "../css/Elementos.css";

const PantallaTaller = () => {

    return (
        <div className="container">
            <div className="titulo">
            <h1>
                Taller
            </h1>
            </div>
            <div className="botonesOscuros">
                <button className="botonOscuro">Comunicacion General</button>
                <button className="botonOscuro">Normas</button>
                <button className="botonOscuro">Retiros</button>
                <button className="botonOscuro">Calificaciones Evaluaciones</button>
                <button className="botonOscuro">Calificaciones TPS</button>
                <button className="botonOscuro">Calificaciones Generales</button>
            </div>
           
            <div className="botonesClaros">
                <button className="botonClaro">Crear</button>
                <button className="botonClaro">Firmar</button>
            </div>
            <div className="boton-volver">
                <button className="volver">Volver</button>
            </div>
             <button onClick={() => navigate("/secciones")}className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer">Volver</button>
        </div>
    );
}
export default PantallaTaller;