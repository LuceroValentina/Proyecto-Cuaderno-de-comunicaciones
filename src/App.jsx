import React from 'react';
import PantallaInicio from './components/PantallaInicio';
import PantallaBiblioteca from './components/PantallaBiblioteca';
import PantallaTeoria from './components/PantallaTeoria';
import PantallaEditar from './components/PantallaEditar';
import PantallaTaller from './components/PantallaTaller';
import PantallaSecciones from './components/PantallaSecciones';
import PantallaEducacionFisica from './components/PantallaEducacionFisica';
import PantallaHorarioClases from './components/PantallaHorarioClases';
import PantallaHorarioContraturno from './components/PantallaHorarioContraturno';
import PantallaClaseConsultas from './components/PantallaClaseConsultas';
import Contactos from './components/Contactos';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioMensaje from './components/FormularioCrearNota';
import Registrodefirmas from './components/Registrodefirmas';
import AltaPreceptor from './components/AltaPreceptor';
import AltaAlumno from './components/AltaAlumno';
import AltaProfesor from './components/AltaProfesor';
import AltaClasedeConsulta from './components/AltaClasedeConsulta';
import AltaDia from './components/AltaDia';
import AltaCalendario from './components/AltaCalendario';
import ListarAlumnos from './components/ListarAlumnos';
import ListarPreceptores from './components/ListarPreceptores';
import ListarProfesores from './components/ListarProfesores';
import DetalleAlumnos from './components/DetalleAlumnos';
import DetallePreceptores from './components/DetallePreceptores';
import DetalleProfesores from './components/DetalleProfesores';
import DetalleCalendario from './components/DetalleCalendario';
import DetalleClasedeConsulta from './components/DetalleClasedeConsulta';
import ListarDia from './components/ListarDia';
import ListarCalendario from './components/ListarCalendario';
import ListarClasedeConsulta from './components/ListarClasedeConsulta';


function App() {

  return (
    <div className='fondo'>
      &nbsp;
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/secciones" element={<PantallaSecciones />} />
          <Route path="/seccion_teoria" element={<PantallaTeoria />} />
          <Route path="/seccion_taller" element={<PantallaTaller />} />
          <Route path="/seccion_biblioteca" element={<PantallaBiblioteca />} />
          <Route path="/seccion_edfisica" element={<PantallaEducacionFisica />} />
          <Route path="/horariosteoria" element={<PantallaHorarioClases />} />
          <Route path="/horarioscontraturnos" element={<PantallaHorarioContraturno />} />
          <Route path="/horariosclasesconsultas" element={<PantallaClaseConsultas />} />
          <Route path="/seccion_contactos" element={<Contactos />} />
          <Route path="/crear_nota" element={<FormularioMensaje />} />
          <Route path="/registro_firmas" element={<Registrodefirmas />} />
          <Route path="/altapreceptor" element={< AltaPreceptor />} />
          <Route path="/altaalumno" element={< AltaAlumno />} />
          <Route path="/altaprofesor" element={< AltaProfesor />} />
          <Route path="/altaclasedeconsulta" element={< AltaClasedeConsulta />} />
          <Route path="/altadia" element={< AltaDia />} />
          <Route path="/altacalendario" element={< AltaCalendario />} />
          <Route path="/listaralumno" element={< ListarAlumnos />} />
          <Route path="/listarprofesor" element={< ListarProfesores />} />
          <Route path="/listarpreceptor" element={< ListarPreceptores />} />
          <Route path="/detallealumno/:id" element={<DetalleAlumnos />} />
          <Route path="/detallepreceptor/:id" element={<DetallePreceptores />} />
          <Route path="/detalleprofesor/:id" element={<DetalleProfesores />} />
          <Route path="/detallecalendario/:id" element={<DetalleCalendario />} />
          <Route path="/detalleprofesor/:id" element={<DetalleProfesores />} />
          <Route path="/detalleclasedeconsulta/:id" element={<DetalleClasedeConsulta />} />
          <Route path="/listardia" element={< ListarDia />} />
          <Route path="/listarcalendario" element={< ListarCalendario />} />
          <Route path="/listarclasedeconsulta" element={< ListarClasedeConsulta />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
