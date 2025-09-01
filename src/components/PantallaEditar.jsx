import React from "react";
import "../css/pantallaEditar.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";


const PantallaEditar = () => {
        const navigate = useNavigate();

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

                <div className="botonesEd">
                    <button className="botonEd">Agregar</button>
                    <button className="botonEd">Modificar</button>
                    <button className="botonEd">Eliminar</button>
                </div>

            </div>
            
            <div className="tabla">
                <div className="fila header">
                    <div className="celda">DNI</div>
                    <div className="celda">NOMBRES</div>
                    <div className="celda">APELLIDOS</div>
                </div>
            
                <div className="fila">
                    <div className="celda">12345678</div>
                    <div className="celda">Pedro Enrique</div>
                    <div className="celda">Herrera</div>
                </div>
            
                <div className="fila">
                    <div className="celda">.</div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                </div>
            
                <div className="fila">
                    <div className="celda">.</div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                </div>
            
                <div className="fila">
                    <div className="celda">.</div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                </div>
            </div>
            <button onClick={() => navigate("/secciones")}className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer">Volver</button>

        </div>
    );
}
export default PantallaEditar;