import React from "react";
import "../css/PantallaEducacionFisica.css";
import "../css/Elementos.css";

const PantallaEducacionFisica = () => {

    return (
        <div className="container">
            <div className="titulo">
            <h1>
                Educacion Física
            </h1>
            </div>
            <div className="botonesOscuros">
            <button className="botonOscuro">Información General</button>
            <button className="botonOscuro">Normas</button>
            <button className="botonOscuro">Ficha médica</button>
            </div>
            <div className="boton-volver">
                <button className="volver">Volver</button>
            </div>
        </div>
    );
}
export default PantallaEducacionFisica;