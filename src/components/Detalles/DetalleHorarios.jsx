import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleHorarios = () => {
    const { id } = useParams();
    const [horarios, setHorarios] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHorarios = async () => {
            try {
                const docRef = doc(db, "horarios", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setHorarios({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setHorarios(null);
                }
            } catch (error) {
                console.error("Error obteniendo horarios:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchHorarios();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!calendario) return <h2>No se encontró el horario</h2>

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
                    Detalle de los Horarios
                </Typography>

                <Typography>ID: {horarios.id}</Typography>
                <Typography>Hora: {horarios.dia}</Typography>
                <Typography>Turno: {horarios.turno}</Typography>
                <Typography>Dia: {horarios.dia}</Typography>
                <Typography>Materia: {horarios.materia}</Typography>
            </Paper>
        </Box>
    );
};

export default DetalleHorarios;