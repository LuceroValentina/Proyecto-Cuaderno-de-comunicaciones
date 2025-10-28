import React, { useState } from "react";
import "../css/PantallaTeoria.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PantallaPCuatri from "./PantallaPCuatri";
import PantallaSCuatri from "./PantallaSCuatri";
import PantallaPAreas from "./PantallaPAreas";
import PantallaSAreas from "./PantallaSAreas";

const PantallaTeoria = () => {
    const navigate = useNavigate();
    const [activo, setActivo] = useState(false);
    const [contenido, setContenido] = useState(null);
    const { userData } = useAuth();
    const rol = userData?.rol;
    const alumno = {
        ciclo: "basico", 
    };

    const renderContenido = () => {
        switch (contenido) {
        case "materiasprimer":
            return <PantallaPCuatri />;
        case "materiassegun":
            return <PantallaSCuatri />;
        case "areasprimer":
            return <PantallaPAreas />;
        case "areassegun":
            return <PantallaSAreas />;
        default:
            return <p style={{ textAlign: "center", color: "#001366" }}>Seleccioná una sección del menú</p>;
        }
    };

    return (
        <div className="containerTeoria">
            <h1 className="titulo">Teoría</h1>
            <button className="boton-abrir" onClick={() => setActivo(!activo)}>
                <img src="/imagenes/flecha_menuabrir.png" alt="" />
            </button>
            <div className={`container-menu ${activo ? "activo" : ""}`}>
                <div className="container-items">
                    <h2 className="subtitulo">Menú</h2>
                    <ul>
                        <li className="lista"><a href="/resumeninasistencias" className="item">Retiros</a></li>
                        <li className="lista"><a href="#" className="item">Evaluaciones y TPS</a></li>
                        <li className="lista"><a href="/comunicaciongeneral" className="item">Comunicación General</a></li>
                        <li className="lista"><a href="/registro_firmas" className="item">Registro de firmas</a></li>
                        <li className="container-submenu">Horarios de Clase
                            <ul className="submenu">
                                <li className="lista-submenu"><a href="/horariosteoria" className="item">Horarios de Clase</a></li>
                                <li className="lista-submenu"><a href="/horarioscontraturnos" className="item">H. Contraturno</a></li>
                                <li className="lista-submenu"><a href="/horariosclasesconsultas" className="item">H. Consultas</a></li>

                            </ul>
                        </li>
                        <li className="lista"><a href="/vestimenta" className="item">Vestimenta</a></li>
                        <li className="lista"><a href="#" className="item">Inasistencias</a></li>
                        <li className="container-submenu">Resumen Cuatrimestre
                            <ul className="submenu">
                                <li className="lista-submenu">
                                    <button onClick={() => setContenido("materiasprimer")} className="item">
                                        Materias Primer
                                    </button>
                                </li>
                                <li className="lista-submenu">
                                    <button onClick={() => setContenido("materiassegun")} className="item">
                                        Materias Segundo
                                    </button>
                                </li>
                                {alumno.ciclo === "basico" && (
                                    <>
                                        <li className="lista-submenu">
                                            <button onClick={() => setContenido("areasprimer")} className="item">
                                                Areas Primer
                                            </button>
                                        </li>
                                        <li className="lista-submenu">
                                            <button onClick={() => setContenido("materiasprimer")} className="item">
                                                Areas Segundo
                                            </button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </li>
                        <li className="container-submenu">Calificaciones
                            <ul className="submenu">
                                <li><a href="#" className="item">Evaluaciones</a></li>       
                                {alumno.ciclo === "basico" && (
                                    <>
                                        <li><a href="#" className="item">Láminas</a></li>
                                    </>
                                )}
                                
                            </ul>
                        </li>
                        <li className="container-submenu">Periodos Exámenes
                            <ul className="submenu">
                                <li><a href="#" className="item">POEC</a></li>
                                <li><a href="#" className="item">Mesas Regulares</a></li>
                                <li><a href="#" className="item">Mesas Previas</a></li>
                            </ul>
                        </li>
                        <li className="container-submenu">Clases de Consultas
                            <ul className="submenu">
                                <li><a href="#" className="item">Horarios</a></li>
                                <li><a href="#" className="item">Asistencias</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="boton-cerrar" onClick={() => setActivo(!activo)}>
                    <img src="/imagenes/flecha_menucerrar.png" alt="" />
                </button>
            </div>
            {rol === "profesor" || "alumnos" && (
                <>
                    <div className="botonesClaros">
                        <button className="botonClaro">Crear</button>
                        <button className="botonClaro">Firmar</button>
                    </div>
                </>
            )}

            <div className="contenido-principal">{renderContenido()}</div>

            <button
                onClick={() => navigate("/secciones")}
                className="fixed top-6 right-6 px-6 py-3 bg-[#3d6490] text-white rounded-lg shadow-lg cursor-pointer"
            >
                Volver
            </button>


        </div>
    );
}
export default PantallaTeoria;
