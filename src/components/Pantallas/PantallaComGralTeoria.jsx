import { useNavigate } from "react-router-dom";
import TablaComunicacionGral from "../TablaComunicacionGral";


export default function PantallaComGralTeoria() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 relative">
      <TablaComunicacionGral coleccion="notas_teoria" />

      <button
        type="button"
        onClick={() => navigate("/crearnota/notas_teoria")}
        className="absolute bottom-6 right-6 bg-white text-sky-600 font-bold w-14 h-14 rounded-full shadow-md hover:bg-sky-50 transition flex items-center justify-center text-xl leading-none"
      >
        Crear
      </button>

    </div>
  );
}
