import React from "react";
import "../css/pantallaEditar.css";
const PantallaEditar = () => {
    return (
        <div className="container">
            <div className="arriba">

                <div className="ingresar">
                    <div className="titulo">
                        <h1>Ingrese el DNI del alumno:</h1>
                    </div>
                    <div className="buscador">
                        <img className="img" src="https://img.icons8.com/ios/50/000000/search.png" alt="Buscar"></img>
                    </div>
                </div>

                <div className="botones">
                    <button className="boton">Agregar</button>
                    <button className="boton">Modificar</button>
                    <button className="boton">Eliminar</button>
                </div>

            </div>
            
            <div className="tabla"></div>
        </div>
    );
}
export default PantallaEditar;