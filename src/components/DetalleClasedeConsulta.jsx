import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleClasedeConsulta = () => {
    const { id } = useParams();
    const [clasedeconsulta, setClasedeConsulta] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClasedeConsulta = async () => {
            try {
                const docRef = doc(db, "clase de consulta", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setClasedeConsulta({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setClasedeConsulta(null);
                }
            } catch (error) {
                console.error("Error obteniendo clase de consulta:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchClasedeConsulta();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!clasedeconsulta) return <h2>No se encontró la clase de consulta</h2>

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
                    Detalle de la Clase de Consulta
                </Typography>

                <Typography>ID: {clasedeconsulta.id}</Typography>
                <Typography>Dia: {clasedeconsulta.dia}</Typography>
                <Typography>Horario: {clasedeconsulta.horario}</Typography>
                <Typography>Materia: {clasedeconsulta.materia}</Typography>
                <Typography>Profesor: {clasedeconsulta.profesor}</Typography>
            </Paper>
        </Box>
    );
};

export default DetalleClasedeConsulta;