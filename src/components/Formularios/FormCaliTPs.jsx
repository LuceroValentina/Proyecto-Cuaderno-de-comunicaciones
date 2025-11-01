import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
//import "../../css/FormCaliTPs.css";
import "../../css/Elementos.css";

const FormCaliTPs = ({ titulo = "Formulario Calificacion Trabajos Practicos" }) => {
    const [Taller, setTaller] = useState('');
    const [NumTrabajo, setNumTrabajo] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Calificacion, setCalificacion] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()    
    };

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit} className="glass-form">
                <h2> Calificación de Trabajos Prácticos </h2>

                <div className="form-group">
                    <label> Fecha: </label>
                    <input
                        type="number"
                        value={Fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        placeholder="Ingrese la Fecha"
                    />

                    <label> Taller: </label>
                    <input
                        type="text"
                        value={Taller}
                        onChange={(e) => setTaller(e.target.value)}
                        placeholder="Ingrese el taller"
                    />

                    <label> N° de Trabajo Práctico: </label>
                    <input
                        type="number"
                        value={NumTrabajo}
                        onChange={(e) => setNumTrabajo(e.target.value)}
                        placeholder="Ingrese el Número de Trabajo Práctico"
                    />

                    <label> Calificación de Trabajo Práctico: </label>
                    <input
                        type="number"
                        value={Calificacion}
                        onChange={(e) => setCalificacion(e.target.value)}
                        placeholder="Ingrese la calificación del Trabajo Práctico"
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormCaliTPs;