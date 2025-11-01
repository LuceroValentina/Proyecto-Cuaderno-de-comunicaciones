import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
//import "../css/FormCaliEvaluaciones.css";
import "../../css/Elementos.css";

const FormCaliEvaluaciones = ({ titulo = "Formulario Calificacion Evaluaciones" }) => {
    const [Taller, setTaller] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Calificacion, setCalificacion] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()    
    };

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit} className="glass-form">
                <h2> Calificación de Evaluaciones </h2>

                <div className="form-group">
                    <label> Fecha: </label>
                    <input
                        type="number"
                        value={Fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        placeholder="Ingrese la fecha de la evaluación"
                    />

                    <label> Taller: </label>
                    <input
                        type="text"
                        value={Taller}
                        onChange={(e) => setTaller(e.target.value)}
                        placeholder="Ingrese el taller que fue evaluado"
                    />

                    <label> Calificación de Evaluación: </label>
                    <input
                        type="number"
                        value={Calificacion}
                        onChange={(e) => setCalificacion(e.target.value)}
                        placeholder="Ingrese la calificación de la evaluación"
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormCaliEvaluaciones;