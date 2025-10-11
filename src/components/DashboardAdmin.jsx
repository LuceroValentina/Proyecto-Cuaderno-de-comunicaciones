import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/DashboardAdmin.css";

const DashboardAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Panel de Administración</h1>
      <p>Seleccioná una acción para continuar:</p>

      <div className="dashboard-botones">
        <div className="altas">
          <button onClick={() => navigate("/altaprofesor")} className="boton-dashboard">Alta Profesor</button>
          <button onClick={() => navigate("/altaalumno")} className="boton-dashboard">Alta Alumno</button>
          <button onClick={() => navigate("/altaadmin")} className="boton-dashboard">Alta Admin</button>
          <button onClick={() => navigate("/altapreceptor")} className="boton-dashboard">Alta Preceptor</button>
          <button onClick={() => navigate("/altatutores")} className="boton-dashboard">Alta Tutores</button>
        </div>
        <div className="listar">
          <button onClick={() => navigate("/listarprofesor")} className="boton-dashboard">Listar Profesores y ver detalle</button>
          <button onClick={() => navigate("/listaralumno")} className="boton-dashboard">Listar alumnos y ver detalle</button>
          <button onClick={() => navigate("/listaradmin")} className="boton-dashboard">Listar Admins y ver detalle</button>
          <button onClick={() => navigate("/listarpreceptor")} className="boton-dashboard">Listar Preceptores y ver detalle</button>
          <button onClick={() => navigate("/listartutores")} className="boton-dashboard">Listar Tutores y ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
