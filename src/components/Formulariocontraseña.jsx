import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../css/Formulariocontraseña.css";
import "../css/Elementos.css";

const Formulariocontraseña = ({ titulo = "Formulario Contraseña" }) => {
    const [contraseña, setContraseña] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()    
    };

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit} className="glass-form">
                <h2> Formulario Contraseña </h2>

                <div className="form-group">
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder="Ingrese su contraseña"
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Formulariocontraseña;