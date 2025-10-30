import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import PantallaInicio from './PantallaInicio';
import PantallaSecciones from './PantallaSecciones'; //TODOS
import PantallaTeoria from './PantallaTeoria'; //TODOS
import PantallaTaller from './PantallaTaller'; //TODOS
import PantallaBiblioteca from './PantallaBiblioteca'; //TODOS
import PantallaEducacionFisica from './PantallaEducacionFisica'; //TODOS
import PantallaContactos from './PantallaContactos'; //TODOS
import PantallaPrimerCuatri from './PantallaPrimerCuatri'; //TODOS
import PantallaSegundoCuatri from './PantallaSegundoCuatri'; //TODOS
import PantallaRetirosTaller from './PantallaRetirosTaller'; //TODOS
import PantallaVestimenta from './PantallaVestimenta'; //TODOS
import Firmar from './Firmar'; //TODOS

import FormHorarioClases from './FormHorarioClases';
import FormHorarioContraturno from './FormHorarioContraturno'; //TODOS
import FormCrearNotifica from './FormCrearNotifica'; //PROFES
import FormCalificacion from './FormCalificacion'; //PROFES
import FormRegistroFirmas from './RegistroFirmas'; //PRECES
import FormFichaMedica from './FormFichaMedica'; //TUTORES
import FormClaseConsultas from './FormClaseConsultas';

import AltaPreceptor from './AltaPreceptor';
import AltaAdmins from './AltaAdmin';
import AltaAlumno from './AltaAlumno'; //PRECES
import AltaProfesor from './AltaProfesor';
import AltaClasedeConsulta from './AltaClasedeConsulta';
import AltaDia from './AltaDia';
import AltaCalendario from './AltaCalendario';

import ListarAlumnos from './ListarAlumnos';
import ListarPreceptores from './ListarPreceptores';
import ListarProfesores from './ListarProfesores';
import ListarDia from './ListarDia';
import ListarCalendario from './ListarCalendario';
import ListarClasedeConsulta from './ListarClasedeConsulta';

import DetalleAlumnos from './DetalleAlumnos';
import DetallePreceptores from './DetallePreceptores';
import DetalleProfesores from './DetalleProfesores';
import DetalleCalendario from './DetalleCalendario';
import DetalleMesa from './DetalleMesa';
import DetalleMaterias from './DetalleMaterias';
import DetalleAreas from './DetalleAreas';
import DetalleClasedeConsulta from './DetalleClasedeConsulta';

import DashboardAdmin from './DashboardAdmin';
import ResumenInasistencias from './ResumenInasistencias'; //TODOS
import Calendario from './Calendario'; //TODOS
import PantallaComunicacionGral from './PantallaComunicacionGral'; //TODOS


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
      <Route path="/seccion_biblioteca" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaBiblioteca />
        </ProtectedRoute>
      }/>
      <Route path="/seccion_edfisica" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaEducacionFisica />
        </ProtectedRoute>
      }/>
      <Route path="/horarioscontraturnos" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <FormHorarioContraturno />
        </ProtectedRoute>
      }/>
      <Route path="/notasprimercuatrimestre" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaPrimerCuatri />
        </ProtectedRoute>
      }/>
      <Route path="/notassegundocuatrimestre" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaSegundoCuatri />
        </ProtectedRoute>
      }/>
      <Route path="/seccion_contactos" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaContactos />
        </ProtectedRoute>
      }/>
      <Route path="/retirostaller" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaRetirosTaller />
        </ProtectedRoute>
      }/>
      <Route path="/vestimenta" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaVestimenta />
        </ProtectedRoute>
      }/>
      <Route path="/resumeninasistencias" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <ResumenInasistencias />
        </ProtectedRoute>
      }/>
      <Route path="/calendario" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <Calendario />
        </ProtectedRoute>
      }/>
      <Route path="/comunicaciongeneral" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaComunicacionGral/>
        </ProtectedRoute>
      }/>
        <Route path="/firmar" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <Firmar/>
        </ProtectedRoute>
      }/>




      {/* Rutas específicas según rol */}
      <Route path="/registrofirmas" element={
        <ProtectedRoute rolesPermitidos={["administradores","preceptores"]}>
          <FormRegistroFirmas />
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
      <Route path="/crearnota" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <FormCrearNotifica />
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
      <Route path="/subircalificaciones" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <FormCalificacion />
        </ProtectedRoute>
      }/>
     
      <Route path="/fichamedica" element={
        <ProtectedRoute rolesPermitidos={["adminitradores","tutores"]}>
          <FormFichaMedica />
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
