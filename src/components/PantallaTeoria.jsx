import React, { useState } from "react";
import "../css/PantallaTeoria.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const PantallaTeoria = () => {
    const navigate = useNavigate();
    const [activo, setActivo] = useState(false);
    const { userData } = useAuth();
    const rol = userData?.rol;
    return (
        <div className="container">
            <h1 className="titulo">Teoría</h1>
            <button className="boton-abrir" onClick={() => setActivo(!activo)}>
                <img src="/imagenes/flecha_menuabrir.png" alt="" />
            </button>
            <div className={`container-menu ${activo ? "activo" : ""}`}>
                <div className="container-items">
                    <h2 className="subtitulo">Menú</h2>
                    <ul>
                        <li className="lista"><a href="#" className="item">Retiros</a></li>
                        <li className="lista"><a href="#" className="item">Evaluaciones y TPS</a></li>
                        <li className="lista"><a href="/crear_nota" className="item">Comunicación General</a></li>
                        <li className="lista"><a href="/registro_firmas" className="item">Registro de firmas</a></li>
                        <li className="container-submenu">Horarios de Clase
                            <ul className="submenu">
                                <li className="lista-submenu"><a href="/horariosteoria" className="item">Horarios de Clase</a></li>
                                <li className="lista-submenu"><a href="/horarioscontraturnos" className="item">H. Contraturno</a></li>
                                <li className="lista-submenu"><a href="/horariosclasesconsultas" className="item">H. Consultas</a></li>

                            </ul>
                        </li>
                        <li className="lista"><a href="#" className="item">Vestimenta</a></li>
                        <li className="lista"><a href="#" className="item">Inasistencias</a></li>
                        <li className="container-submenu">Resumen Cuatrimestre
                            <ul className="submenu">
                                <li className="lista-submenu"><a href="/materiasprimercuatri" className="item">1er Cuatrimestre</a></li>
                                <li className="lista-submenu"><a href="#" className="item">2do Cuatrimestre</a></li>
                            </ul>
                        </li>
                        <li className="container-submenu">Calificaciones
                            <ul className="submenu">
                                <li><a href="#" className="item">Evaluaciones</a></li>
                                <li><a href="#" className="item">Láminas</a></li>
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
            {rol === "profesor" && (
                <>
                    <div className="botonesClaros">
                        <button className="botonClaro">Crear</button>
                        <button className="botonClaro">Firmar</button>
                    </div>
                </>
            )}

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
