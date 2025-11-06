import React, { useEffect, useState } from "react";
import "../../css/PantallasCuatrimestre.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const PantallaPrimerCuatri = () => {
    const navigate = useNavigate();
    const [calificaciones, setCalificaciones] = useState([]);
    useEffect(() => {
        const obtenerCalificaciones = async () => {
            const datos = await getDocs(collection(db, "calificaciones"));
            setCalificaciones(datos.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        obtenerCalificaciones();
    }, []);

    const alumno = {
        ciclo: "basico", 
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
                    <div className="celda">MATERIA</div>
                    <div className="celda">FECHA</div>
                    <div className="celda">CALIFICACIÓN</div>
                    <div className="celda">FIRMA</div>
                </div>
                
                {calificaciones.length > 0 ? (
                    calificaciones.map((cali, index) => (
                        <div className="fila" key={index}>
                            <div className="celda">{cali.materia}</div>
                            <div className="celda">{cali.fecha}</div>
                            <div className="celda">{cali.calificacion}</div>
                            <div className="celda">–</div>
                        </div>
                    ))
                ) : (
                    <div className="fila">
                        <div className="celda" colSpan="4">No hay calificaciones cargadas</div>
                    </div>
                )}
            </div>
            {alumno.ciclo === "basico" && (
                <>
                    <div className="containerCuatri">
                        <div className="arriba">

                            <div className="botonesEd">
                                <button onClick={() => navigate("/formularioCalificaciones")} className="botonEd">Agregar</button>
                                <button className="botonEd">Modificar</button>
                            </div>

                        </div>
                        
                        <div className="tabla">
                            <div className="fila header">
                                <div className="celda">ÁREA</div>
                                <div className="celda">FECHA</div>
                                <div className="celda">CALIFICACIÓN</div>
                                <div className="celda">FIRMA</div>
                            </div>

                            {calificaciones.length > 0 ? (
                                calificaciones.map((cali, index) => (
                                    <div className="fila" key={index}>
                                        <div className="celda">{cali.materia}</div>
                                        <div className="celda">{cali.fecha}</div>
                                        <div className="celda">{cali.calificacion}</div>
                                        <div className="celda">–</div>
                                    </div>
                                ))
                            ) : (
                                <div className="fila">
                                    <div className="celda" colSpan="4">No hay calificaciones cargadas</div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
export default PantallaPrimerCuatri;