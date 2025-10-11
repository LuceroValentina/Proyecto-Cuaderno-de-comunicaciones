import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

import PantallaInicio from './PantallaInicio';
import Home from './Home';
import AltaProfesor from './AltaProfesor';
import AltaPreceptor from './AltaPreceptor';
import AltaMateria from './AltaMateria';
import AltaCurso from './AltaCurso';
import AltaHorario from './AltaHorario';
import AltaTurno from './AltaTurno';
import AltaTema from './AltaTema';
import AltaAdmin from './AltaAdmin';
import AltaAlumno from './AltaAlumno';
import AltaCalendario from './AltaCalendario';
import AltaCalificacion from './AltaCalificacion';
import AltaClasedeConsulta from './AltaClasedeConsulta';
import AltaDia from './AltaDia';
import AltaFirma from './AltaFirma';
import AltaNota from './AltaNota';
import AltaTutores from './AltaTutores';
import ProfesorDashboard from './ProfesorDashboard';
import ProtectedRoute from './ProtectedRoute';
import DashboardProfesor from './DashboardProfesor';
import PantallaEducacionFisica from './PantallaEducacionFisica';
import PantallaTeoria from './PantallaTeoria';

const AppRouter = ({ user }) => {
    const { rol } = user || {};
    const navigate = useNavigate();

    if (!user) {
        return (
            <Routes>
                <Route path='/login' element={<PantallaInicio />} />
                <Route path='*' element={<Navigate to="/login" />} />
            </Routes>
        );
    }

    useEffect(() => {
        const handlePopState = () => {
            if (user && ['admin', 'preceptor', 'profesor', 'alumno', 'tutor'].includes(user.rol)) {
                navigate(window.location.pathname, { replace: true });
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [user, navigate]);

    // Fallback si el rol no es válido
    if (!rol || !['admin', 'preceptor', 'profesor', 'alumno', 'tutor'].includes(rol)) {
        return (
            <Box p={4}>
                <Typography variant="h5" color="error">
                    No tenés permisos para acceder. Por favor cerrá sesión e intentá nuevamente.
                </Typography>
            </Box>
        );
    }

    return (
        <Routes>
            {rol === 'admin' && (
                <>
                    <Route path="/login" element={<PantallaInicio />} />
                    <Route
                        path="/alta-profesor"
                        element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <AltaProfesor />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/alta-preceptor"
                        element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <AltaPreceptor />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/alta-alumno"
                        element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <AltaAlumno />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/alta-tutores"
                        element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <AltaTutores />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/alta-admin"
                        element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <AltaAdmin />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/alta-materia" element={<AltaMateria />} />
                    <Route path="/alta-turno" element={<AltaTurno />} />
                    <Route path="/alta-tema" element={<AltaTema />} />
                    <Route path="/alta-firma" element={<AltaFirma />} />
                    <Route path="/alta-nota" element={<AltaNota />} />
                </>
            )}

            {rol === 'preceptor' && (
                <ProtectedRoute user={user}>
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/alta-curso" element={<AltaCurso />} />
                        <Route path="/alta-horario" element={<AltaHorario />} />
                        <Route path="/alta-calendario" element={<AltaCalendario />} />
                        <Route path="/alta-dia" element={<AltaDia />} />
                        <Route path="/alta-firma" element={<AltaFirma />} />
                        <Route path="/alta-tema" element={<AltaTema />} />
                        <Route path="/alta-nota" element={<AltaNota />} />
                    </>
                </ProtectedRoute>
            )}

            {rol === 'profesor' && (
                <>
                    <Route path="/login" element={<PantallaInicio />} />
                    <Route
                        path="/dashboard-profesor"
                        element={
                            <ProtectedRoute allowedRoles={['profesor']}>
                                <DashboardProfesor />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profesor-edfisica"
                        element={
                            <ProtectedRoute allowedRoles={['profesor']}>
                                <PantallaEducacionFisica />
                            </ProtectedRoute>
                        }
                    />
                    {/* despues tenemos que ver como dividir las pantallas si son profesores de distintas areas  */}
                    <Route
                        path="/profesor-teoria"
                        element={
                            <ProtectedRoute allowedRoles={['profesor']}>
                                <PantallaTeoria />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profesor-taller"
                        element={
                            <ProtectedRoute allowedRoles={['profesor']}>
                                <PantallaTaller />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/alta-firma"
                        element={
                            <ProtectedRoute allowedRoles={['profesor']}>
                                <AltaFirma />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/alta-nota"
                        element={
                            <ProtectedRoute allowedRoles={['profesor']}>
                                <AltaNota />
                            </ProtectedRoute>
                        }
                    />
                </>
            )}

            {rol === 'alumno' && (
                <ProtectedRoute user={user}>
                    <>
                        <Route path="/alta-calendario" element={<AltaCalendario />} />
                        <Route path="/alta-horario" element={<AltaHorario />} />
                        <Route path="/alta-claseconsulta" element={<AltaClasedeConsulta />} />
                    </>
                </ProtectedRoute>
            )}

            {rol === 'tutor' && (
                <ProtectedRoute user={user}>
                    <>
                        <Route path="/alta-horario" element={<AltaHorario />} />
                        <Route path="/alta-firma" element={<AltaFirma />} />
                        <Route path="/alta-nota" element={<AltaNota />} />
                    </>
                </ProtectedRoute>
            )}

            {/* Fallback para cualquier ruta no válida */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;

