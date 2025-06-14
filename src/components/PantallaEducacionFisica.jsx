import React from "react";
import "../css/PantallaEducacionFisica.css";

const PantallaEducacionFisica = () => {

    return (
        <div className="container">
            <div className="titulo">
            <h1>
                Educacion Física
            </h1>
            </div>
            <div className="botones">
            <button className="boton">Información General</button>
            <button className="boton">Normas</button>
            <button className="boton">Ficha médica</button>
            </div>
            <div className="boton-volver">
                <button className="volver">Volver</button>
            </div>
        </div>
    );
}
export default PantallaEducacionFisica;