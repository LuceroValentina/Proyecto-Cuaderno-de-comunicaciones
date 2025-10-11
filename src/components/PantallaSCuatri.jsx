import React from "react";
import "../css/pantallaEditar.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";
/* HACER CSS ESPECIFICO PARA LA PANTALLA (bri) */

const PantallaSCuatri = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="arriba">

                <div className="botonesEd">
                    <button className="botonEd">Agregar</button>
                    <button className="botonEd">Modificar</button>
                    <button className="botonEd">Eliminar</button>
                </div>

            </div>
            
            <div className="tabla">
                <div className="fila header">
                    <div className="celda">MATERIA</div>
                    <div className="celda">FECHA</div>
                    <div className="celda">CALIFICACIÓN</div>
                    <div className="celda">FIRMA</div>
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
export default PantallaSCuatri;