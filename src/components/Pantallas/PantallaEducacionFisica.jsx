/**
 * @file PantallaEducacionFisica.jsx
 * @description Componente que representa la pantalla principal de la sección "Educación Física".
 * Muestra información general, normas y ficha médica. Si el usuario tiene rol de "profesor",
 * se habilitan opciones adicionales como "Crear" y "Firmar".
 */
import React from "react";
import "../../css/PantallaEducacionFisica.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/**
 * @component PantallaEducacionFisica
 * @description Renderiza la pantalla de la sección de Educación Física,
 * mostrando opciones según el rol del usuario autenticado.
 * Los profesores disponen de botones adicionales para crear o firmar registros.
 * 
 * @returns {JSX.Element} Estructura visual de la pantalla de Educación Física.
 */
const PantallaEducacionFisica = () => {
    /**
     * @constant navigate
     * @type {Function}
     * @description Hook de React Router que permite la navegación programática entre rutas.
     */
    const navigate = useNavigate();
    /**
     * @constant rol
     * @type {string}
     * @description Rol actual del usuario obtenido desde el contexto de autenticación.
     * Define los permisos y opciones visibles en la interfaz.
     */
    const { rol } = useAuth(); 

    return (
        <div className="containerEdfis">
            <div className="titulo">
                <h1>Educación Física</h1>
            </div>

            <div className="botonesOscuros">
                <button className="botonOscuro">Información General</button>
                <button className="botonOscuro">Normas</button>
                <button className="botonOscuro">Ficha médica</button>

                {rol === "profesores" && (
                    <>
                        <div className="botonesClaros">
                            <button className="botonClaro">Crear</button>
                            <button className="botonClaro">Firmar</button>
                        </div>
                    </>
                )}
            </div>

            <button
                onClick={() => navigate("/secciones")}
                className="volver fixed bottom-6 right-6 w-20 h-8 bg-[#3d6490] text-white rounded cursor-pointer flex items-center justify-center"
            >
                Volver
            </button>
        </div>
    );
};
export default PantallaEducacionFisica;
