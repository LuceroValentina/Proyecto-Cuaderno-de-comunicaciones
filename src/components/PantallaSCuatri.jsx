import React from "react";
import "../css/PantallasCuatrimestre.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";


const PantallaSCuatri = () => {
    const navigate = useNavigate();
    const alumno = {
        ciclo: "superior", 
    };

    return (
        <div className="containerCuatri">
            <div className="arriba">

                <div className="botonesEd">
                    <button onClick={() => navigate("/formularioCalificaciones")} className="botonEd">Agregar</button>
                    <button className="botonEd">Modificar</button>
                </div>

            </div>
            
            <div className="tabla">
                <div className="fila header">
                    <div className="celda">{alumno.ciclo === "basico" ? "ÁREA" : "MATERIA"}</div>
                    <div className="celda">FECHA</div>
                    <div className="celda">CALIFICACIÓN</div>
                    <div className="celda">FIRMA</div>
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
export default PantallaSCuatri;