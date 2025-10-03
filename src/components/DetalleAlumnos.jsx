import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleAlumnos = () => {
    const { id } = useParams();
    const [alumno, setAlumno] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlumno = async () => {
            try {
                const docRef = doc(db, "alumnos", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setAlumno({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setAlumno(null);
                }
            } catch (error) {
                console.error("Error obteniendo alumno:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchAlumno();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!alumno) return <h2>No se encontró el alumno</h2>

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                sx={{
                    p: 4,
                    width: "50vw",
                    maxHeight: "70vh",
                    backgroundColor: "white",
                    overflowY: "auto",
                    borderRadius: 2,
                }}
            >
                <Typography textAlign="center" variant="h6" gutterBottom>
                    Detalle del alumno
                </Typography>

                <Typography>ID: {alumno.id}</Typography>
                <Typography>Nombre: {alumno.nombre}</Typography>
                <Typography>Apellido: {alumno.apellido}</Typography>
                <Typography>DNI: {alumno.dni}</Typography>
                <Typography>Teléfono: {alumno.telefono}</Typography>
                <Typography>Dirección: {alumno.direccion}</Typography>
                <Typography>Género: {alumno.genero}</Typography>
                <Typography>Ciclo: {alumno.ciclo}</Typography>
                <Typography>Turno: {alumno.turno}</Typography>
                <Typography>Curso: {alumno.curso}</Typography>
            </Paper>
        </Box>
    );
};

export default DetalleAlumnos;