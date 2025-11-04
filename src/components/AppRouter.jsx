import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import PantallaInicio from './Pantallas/PantallaInicio';
import PantallaSecciones from './Pantallas/PantallaSecciones'; //TODOS
import PantallaTeoria from './Pantallas/PantallaTeoria'; //TODOS
import PantallaTaller from './Pantallas/PantallaTaller'; //TODOS
import PantallaBiblioteca from './Pantallas/PantallaBiblioteca'; //TODOS
import PantallaEducacionFisica from './Pantallas/PantallaEducacionFisica'; //TODOS
import PantallaContactos from './Pantallas/PantallaContactos'; //TODOS
import PantallaComGralTeoria from './Pantallas/PantallaComGralTeoria'; //TODOS
import PantallaPrimerCuatri from './Pantallas/PantallaPrimerCuatri'; //TODOS
import PantallaSegundoCuatri from './Pantallas/PantallaSegundoCuatri'; //TODOS
import PantallaRetirosTaller from './Pantallas/PantallaRetirosTaller'; //TODOS
import PantallaVestimenta from './Pantallas/PantallaVestimenta'; //TODOS
import PantallaCaliTPs from './Pantallas/PantallaCaliTPs';
import PantallaCaliEvaluaciones from './Pantallas/PantallaCaliEvaluaciones';
import PantallaCaliGenerales from './Pantallas/PantallaCaliGenerales';


import FormHorarioClases from './Formularios/FormHorarioClases';
import FormHorarioContraturno from './Formularios/FormHorarioContraturno'; //TODOS
import FormCrearNotifica from './Formularios/FormCrearNotifica'; //PROFES
import FormCalificacion from './Formularios/FormCalificacion'; //PROFES
import FormRegistroFirmas from './RegistroFirmas'; //PRECES
import FormFichaMedica from './Formularios/FormFichaMedica'; //TUTORES
import FormClaseConsultas from './Formularios/FormClaseConsultas';
import FormCaliTPs from './Formularios/FormCaliTPs'; //PROFES
import FormCaliEvaluaciones from './Formularios/FormCaliEvaluaciones'; //PROFES
import FormCaliGenerales from './Formularios/FormCaliGenerales'; //PROFES

import AltaPreceptor from './Altas/AltaPreceptor';
import AltaAdmins from './Altas/AltaAdmin';
import AltaAlumno from './Altas/AltaAlumno'; //PRECES
import AltaProfesor from './Altas/AltaProfesor';
import AltaClasedeConsulta from './Altas/AltaClasedeConsulta';
import AltaDia from './Altas/AltaDia';
import AltaCalendario from './Altas/AltaCalendario';

import ListarAlumnos from './Listas/ListarAlumnos';
import ListarPreceptores from './Listas/ListarPreceptores';
import ListarProfesores from './Listas/ListarProfesores';
import ListarDia from './Listas/ListarDia';
import ListarCalendario from './Listas/ListarCalendario';
import ListarClasedeConsulta from './Listas/ListarClasedeConsulta';

import DetalleAlumnos from './Detalles/DetalleAlumnos';
import DetallePreceptores from './Detalles/DetallePreceptores';
import DetalleProfesores from './Detalles/DetalleProfesores';
import DetalleCalendario from './Detalles/DetalleCalendario';
import DetalleMesa from './Detalles/DetalleMesa';
import DetalleMaterias from './Detalles/DetalleMaterias';
import DetalleAreas from './Detalles/DetalleAreas';
import DetalleClasedeConsulta from './Detalles/DetalleClasedeConsulta';

import DashboardAdmin from './DashboardAdmin';
import ResumenInasistencias from './ResumenInasistencias'; //TODOS
import Calendario from './Calendario'; //TODOS
import PantallaRetirosTeoria from './Pantallas/PantallaRetirosTeoria';


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
      <Route path="/comunicaciongeneral" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaComGralTeoria/>
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
      <Route path="/calificacionestps" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaCaliTPs />
        </ProtectedRoute>
      }/>
      <Route path="/calificacionesevaluaciones" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaCaliEvaluaciones />
        </ProtectedRoute>
      }/>
      <Route path="/calificacionestaller" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <PantallaCaliGenerales />
        </ProtectedRoute>
      }/>

      <Route path="/horarioscontraturnos" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <FormHorarioContraturno />
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
      {/*
      <Route path="/firmar" element={
        <ProtectedRoute rolesPermitidos={ROLES}>
          <Firmar />
        </ProtectedRoute>
      }/> 
      */}




      {/* Rutas específicas según rol */}
      <Route path="/retirosteoria" element={
        <ProtectedRoute rolesPermitidos={["administradores"]}>
          <PantallaRetirosTeoria />
        </ProtectedRoute>
      }/>

      <Route path="/registrofirmas" element={
        <ProtectedRoute rolesPermitidos={["administradores","preceptores"]}>
          <FormRegistroFirmas />
        </ProtectedRoute>
      }/>

      <Route path="/crearnota/:coleccion" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <FormCrearNotifica />
        </ProtectedRoute>
      }/>
      <Route path="/subircalificaciones" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <FormCalificacion />
        </ProtectedRoute>
      }/>
      <Route path="/subircalistpstaller" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <FormCaliTPs />
        </ProtectedRoute>
      }/>
      <Route path="/subircalievtaller" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <FormCaliEvaluaciones />
        </ProtectedRoute>
      }/>
      <Route path="/subircalisgenerales" element={
        <ProtectedRoute rolesPermitidos={["administradores","profesores"]}>
          <FormCaliGenerales />
        </ProtectedRoute>
      }/>
      <Route path="/fichamedica" element={
        <ProtectedRoute rolesPermitidos={["adminitradores","tutores"]}>
          <FormFichaMedica />
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
