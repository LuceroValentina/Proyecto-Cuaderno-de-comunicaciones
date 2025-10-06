import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleCalendario = () => {
    const { id } = useParams();
    const [calendario, setCalendario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCalendario = async () => {
            try {
                const docRef = doc(db, "calendario", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setCalendario({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setCalendario(null);
                }
            } catch (error) {
                console.error("Error obteniendo calendario:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchCalendario();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!calendario) return <h2>No se encontró el calendario</h2>

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
                    Detalle del Calendario
                </Typography>

                <Typography>ID: {calendario.id}</Typography>
                <Typography>Dia: {calendario.dia}</Typography>
                <Typography>Mes: {calendario.mes}</Typography>
                <Typography>Estado: {calendario.estado}</Typography>
            </Paper>
        </Box>
    );
};

export default DetalleCalendario;