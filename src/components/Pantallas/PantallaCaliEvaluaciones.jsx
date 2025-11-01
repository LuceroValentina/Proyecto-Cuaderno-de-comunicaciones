import React from "react";
//import "../css/PantallasCaliEvaluaciones.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";

const PantallaCaliEvaluaciones = () => {
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
                    <div className="celda">TALLER</div>
                    <div className="celda">CALIFICACIÓN DE LA EVALUACIÓN</div>
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
export default PantallaCaliEvaluaciones;