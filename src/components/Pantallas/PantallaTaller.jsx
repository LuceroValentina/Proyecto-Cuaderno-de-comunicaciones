import React, { useState } from "react";
import "../../css/PantallaTaller.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PantallaCaliTPs from "./PantallaCaliTPs";
import PantallaCaliEvaluaciones from "./PantallaCaliEvaluaciones";
import PantallaCaliGenerales from "./PantallaCaliGenerales";

const PantallaTaller = () => {
    const navigate = useNavigate();
    const { userData } = useAuth();
    const [contenido, setContenido] = useState(null);
    const rol = userData?.rol;

    
    const renderContenido = () => {
        switch (contenido) {
            case "/calificacionestps":
                return <PantallaCaliTPs />;
            case "/calificacionesevaluaciones":
                return <PantallaCaliEvaluaciones />;
            case "/calificacionestaller":
                return <PantallaCaliGenerales />;
            default:
                return <p style={{ textAlign: "center", color: "#001366" }}>Seleccioná una sección del menú</p>;
        }
    };

    return (
        <div className="containerTaller">
            <div className="titulo">
                <h1>
                    Taller
                </h1>
            </div>
            <div className="botonesOscuros">
                <button className="botonOscuro">Comunicacion General</button>
                <button className="botonOscuro">Normas</button>
                <button className="botonOscuro">Retiros</button>
                <button onClick={() => setContenido("/calificacionesevaluaciones")} className="botonOscuro">
                    Calificaciones Evaluaciones
                </button>
                <button onClick={() => setContenido("/calificacionestps")} className="botonOscuro">
                    Calificaciones TPS
                </button>
                <button onClick={() => setContenido("/calificacionestaller")} className="botonOscuro">
                    Calificaciones Generales
                </button>
            </div>

            {rol === "profesores" || "alumnos" && (
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
                className="volver fixed bottom-6 left-6 w-20 h-8 bg-[#3d6490] text-white rounded cursor-pointer flex items-center justify-center"
            >
                Volver
            </button>
        </div>
    );
}
export default PantallaTaller;