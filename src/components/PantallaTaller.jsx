import React from "react";
import "../css/PantallaTaller.css";
import "../css/Elementos.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PantallaTaller = () => {
    const navigate = useNavigate();
     const { userData } = useAuth();
        const rol = userData?.rol;
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
                <button className="botonOscuro">Calificaciones Evaluaciones</button>
                <button className="botonOscuro">Calificaciones TPS</button>
                <button className="botonOscuro">Calificaciones Generales</button>
            </div>

            {rol === "profesores" && (
                <>
                    <div className="botonesClaros">
                        <button className="botonClaro">Crear</button>
                        <button className="botonClaro">Firmar</button>
                    </div>
                </>
            )}
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