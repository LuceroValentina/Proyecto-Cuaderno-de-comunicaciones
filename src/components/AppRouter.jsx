import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import PantallaInicio from './PantallaInicio';
import PantallaSecciones from './PantallaSecciones';
import PantallaTeoria from './PantallaTeoria';
import PantallaTaller from './PantallaTaller';
import PantallaEducacionFisica from './PantallaEducacionFisica';
import PantallaHorarioClases from './PantallaHorarioClases';
import PantallaHorarioContraturno from './PantallaHorarioContraturno';
import PantallaClaseConsultas from './PantallaClaseConsultas';
import PantallaPCuatri from './PantallaPCuatri';
import PantallaSCuatri from './PantallaSCuatri';
import Contactos from './Contactos';
import FormularioMensaje from './FormularioCrearNota';
import Registrodefirmas from './Registrodefirmas';
import AltaPreceptor from './AltaPreceptor';
import AltaAdmins from './AltaAdmin';
import AltaAlumno from './AltaAlumno';
import AltaProfesor from './AltaProfesor';
import AltaClasedeConsulta from './AltaClasedeConsulta';
import AltaDia from './AltaDia';
import AltaCalendario from './AltaCalendario';
import ListarAlumnos from './ListarAlumnos';
import ListarPreceptores from './ListarPreceptores';
import ListarProfesores from './ListarProfesores';
import DetalleAlumnos from './DetalleAlumnos';
import DetallePreceptores from './DetallePreceptores';
import DetalleProfesores from './DetalleProfesores';
import DetalleCalendario from './DetalleCalendario';
import DetalleClasedeConsulta from './DetalleClasedeConsulta';
import ListarDia from './ListarDia';
import ListarCalendario from './ListarCalendario';
import ListarClasedeConsulta from './ListarClasedeConsulta';
import DashboardAdmin from './DashboardAdmin';
import PantallaBiblioteca from './PantallaBiblioteca';

const ROLES = ["administradores", "preceptores", "profesores", "alumnos", "tutores"];

const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<PantallaInicio />} />

      <Route path="/secciones" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaSecciones />
        </ProtectedRoute>
      }/>
      <Route path="/seccion_teoria" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaTeoria />
        </ProtectedRoute>
      }/>
      <Route path="/seccion_taller" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaTaller />
        </ProtectedRoute>
      }/>
      <Route path="/seccion_edfisica" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaEducacionFisica />
        </ProtectedRoute>
      }/>
      <Route path="/horarioscontraturnos" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaHorarioContraturno />
        </ProtectedRoute>
      }/>
      <Route path="/materiasprimercuatri" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaPCuatri />
        </ProtectedRoute>
      }/>
      <Route path="/materiassegundocuatri" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaSCuatri />
        </ProtectedRoute>
      }/>
      <Route path="/seccion_contactos" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <Contactos />
        </ProtectedRoute>
      }/>
      <Route path="/crear_nota" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <FormularioMensaje />
        </ProtectedRoute>
      }/>

      {/* Rutas específicas según rol */}
      <Route path="/registro_firmas" element={
        <ProtectedRoute rolesPermitidos={["administradores","preceptores"]}>
          <Registrodefirmas />
        </ProtectedRoute>
      }/>

      <Route path="/altapreceptor" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <AltaPreceptor />
        </ProtectedRoute>
      }/>
      <Route path="/altaalumno" element={
        <ProtectedRoute rolesPermitidos={["administradores","preceptores"]}>
          <AltaAlumno />
        </ProtectedRoute>
      }/>
      <Route path="/altaadmin" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <AltaAdmins />
        </ProtectedRoute>
      }/>
      <Route path="/altaprofesor" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <AltaProfesor />
        </ProtectedRoute>
      }/>
      <Route path="/altaclasedeconsulta" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores","preceptores","alumnos"]}>
          <AltaClasedeConsulta />
        </ProtectedRoute>
      }/>
      <Route path="/altadia" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <AltaDia />
        </ProtectedRoute>
      }/>
      <Route path="/altacalendario" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <AltaCalendario />
        </ProtectedRoute>
      }/>
     

      <Route path="/listaralumno" element={
        <ProtectedRoute rolesPermitidos={["administradores","preceptores"]}>
          <ListarAlumnos />
        </ProtectedRoute>
      }/>
      <Route path="/listarprofesor" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <ListarProfesores />
        </ProtectedRoute>
      }/>
      <Route path="/listarpreceptor" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <ListarPreceptores />
        </ProtectedRoute>
      }/>

      <Route path="/detallealumno/:id" element={
        <ProtectedRoute rolesPermitidos={["administradores","preceptores"]}>
          <DetalleAlumnos />
        </ProtectedRoute>
      }/>
      <Route path="/detallepreceptor/:id" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <DetallePreceptores />
        </ProtectedRoute>
      }/>
      <Route path="/detalleprofesor/:id" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <DetalleProfesores />
        </ProtectedRoute>
      }/>
      <Route path="/detallecalendario/:id" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <DetalleCalendario />
        </ProtectedRoute>
      }/>
      <Route path="/detalleclasedeconsulta/:id" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <DetalleClasedeConsulta />
        </ProtectedRoute>
      }/>

      <Route path="/listardia" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <ListarDia />
        </ProtectedRoute>
      }/>
      <Route path="/listarcalendario" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <ListarCalendario />
        </ProtectedRoute>
      }/>
      <Route path="/listarclasedeconsulta" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <ListarClasedeConsulta />
        </ProtectedRoute>
      }/>

      <Route path="/dashboard-admin" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <DashboardAdmin />
        </ProtectedRoute>
      }/>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
};

export default AppRouter;
