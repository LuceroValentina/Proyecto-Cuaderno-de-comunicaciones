import React, { useEffect, useState } from "react";
import "../../css/PantallasCuatrimestre.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const PantallaCaliTPs = () => {
    const navigate = useNavigate();
    
    return (
        <div className="containerCuatri">
            <div className="arriba">

                <div className="botonesEd">
                    <button onClick={() => navigate("/FormCaliTPs")} className="botonEd">Agregar</button>
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
export default PantallaCaliTPs;