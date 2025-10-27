import React from "react";
import "../css/PantallasCuatrimestre.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";

const PantallaSAreas = () => {
    const navigate = useNavigate();

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
                    <div className="celda">AREAS</div>
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
            <button onClick={() => navigate("/secciones")}className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer">Volver</button>

        </div>
    );
}
export default PantallaSAreas;