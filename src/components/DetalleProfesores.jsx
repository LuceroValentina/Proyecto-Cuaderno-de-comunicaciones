import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleProfesores = () => {
    const { id } = useParams();
    const [profesor, setProfesor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfesor = async () => {
            try {
                const docRef = doc(db, "profesores", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setProfesor({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setProfesor(null);
                }
            } catch (error) {
                console.error("Error obteniendo profesor:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchProfesor();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!profesor) return <h2>No se encontró el profesor</h2>

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
                    Detalle del profesor
                </Typography>

                <Typography>ID: {profesor.id}</Typography>
                <Typography>Nombre: {profesor.nombre}</Typography>
                <Typography>Apellido: {profesor.apellido}</Typography>
                <Typography>DNI: {profesor.dni}</Typography>
                <Typography>Teléfono: {profesor.telefono}</Typography>
                <Typography>Dirección: {profesor.direccion}</Typography>
                <Typography>Género: {profesor.genero}</Typography>
                <Typography>Materia: {profesor.materia}</Typography>
                <Typography>Curso: {profesor.curso}</Typography>
            </Paper>
        </Box>
    );
};

export default DetalleProfesores;