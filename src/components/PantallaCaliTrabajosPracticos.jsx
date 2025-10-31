import React from "react";
//import "../css/PantallasCaliTrabajosPracticos.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";

const PantallaCaliTrabajosPracticos = () => {
    const navigate = useNavigate();
    
    return (
        <div className="containerCuatri">
            <div className="arriba">

                <div className="botonesEd">
                    <button onClick={() => navigate("/FormCaliTrabajosPracticos")} className="botonEd">Agregar</button>
                    <button className="botonEd">Modificar</button>
                </div>

            </div>
            
            <div className="tabla">
                <div className="fila header">
                    <div className="celda">FECHA</div>
                    <div className="celda">MATERIA</div>
                    <div className="celda">N° DE TRABAJO PRÁCTICO</div>
                    <div className="celda">CALIFICACIÓN</div>
                </div>

                <div className="fila">
                    <div className="celda">.</div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                </div>
            
                <div className="fila">
                    <div className="celda">.</div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                </div>
            
                <div className="fila">
                    <div className="celda">.</div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                </div>
            
                <div className="fila">
                    <div className="celda">.</div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                    <div className="celda"></div>
                </div>

            </div>
        </div>
    );
}
export default PantallaCaliTrabajosPracticos;