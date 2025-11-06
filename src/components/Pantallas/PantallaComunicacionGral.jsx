/**
 * @file PantallaComGralTeoria.jsx
 * @description Componente que representa la pantalla de comunicación general para la sección de Teoría.
 * Muestra una tabla con la información general de comunicación y un botón para crear nuevas notas o mensajes.
 */
import { useNavigate } from "react-router-dom";
import TablaComunicacionGral from "../TablaComunicacionGral";

/**
 * @component PantallaComGralTeoria
 * @description Renderiza la interfaz de comunicación general del área de Teoría.
 * Permite visualizar una tabla de comunicaciones y acceder a un formulario de creación de nuevas notas.
 * 
 * @returns {JSX.Element} Estructura visual de la pantalla de comunicación general de Teoría.
 */
export default function PantallaComGralTeoria() {
  /**
   * @constant navigate
   * @type {Function}
   * @description Hook de React Router que permite navegar programáticamente a otras rutas.
   */
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <TablaComunicacionGral />

      <button
        type="button"
        onClick={() => navigate("/crearnota")}
        className="absolute bottom-6 right-6 bg-white text-sky-600 font-bold w-14 h-14 rounded-full shadow-md hover:bg-sky-50 transition flex items-center justify-center text-xl leading-none"
      >
        Crear
      </button>

    </div>
  );
}
