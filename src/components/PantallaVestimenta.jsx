import React from "react";
import "../css/Vestimenta.css";
import { useNavigate } from "react-router-dom";

const PantallaVestimenta = () => {
    const navigate = useNavigate();

    return (
        <div className="container-vestimenta">
            <div>
                <h1 className="titulo-vestimenta">
                    Vestimenta escolar
                </h1>
            </div>
            <div className="vestimenta-taller">
                <h2 >Taller</h2>
                <p className="texto-taller">Guardapolvo azul obligatorio.</p>
                <p className="texto-taller">Además los alumnos no podrán asistir con zapatos abiertos, o pantalón corto.</p>
                <img src="/imagenes/guardapolvo-azul.png" className="img-vestimenta" alt="Guardapolvo azul taller" />
            </div>
            <div className="vestimenta-teoria">
                <h2>Teoría</h2>
                <p className="texto-teoria">Remera blanca, optativa azul o gris.</p>
                <p className="texto-teoria">Jean azul o jogging azul.</p>
                <img src="/imagenes/ropa.png" className="img-vestimenta" alt="" />
            </div>
            <button
                onClick={() => navigate("/secciones")}
                className="volver fixed bottom-6 right-6 w-20 h-8 bg-[#3d6490] text-white rounded cursor-pointer flex items-center justify-center"
            >
                Volver
            </button>
        </div>
    );
}
export default PantallaVestimenta;