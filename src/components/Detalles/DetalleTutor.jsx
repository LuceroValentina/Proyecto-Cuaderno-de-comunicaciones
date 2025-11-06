import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleTutores = () => {
    const { id } = useParams();
    const correo = decodeURIComponent(id);
    const [tutor, setTutor] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const docRef = doc(db, "tutores", correo);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setTutor({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setTutor(null);
                }
            } catch (error) {
                console.error("Error obteniendo tutor:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchTutor();
    }, [correo]);

    if (loading) return <h2>Cargando...</h2>
    if (!tutor) return <h2>No se encontró el tutor</h2>

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
                    Detalle del tutor
                </Typography>
                <Typography>ID: {tutor.id}</Typography>
                <Typography>Nombre: {tutor.nombre}</Typography>
                <Typography>Apellido: {tutor.apellido}</Typography>
                <Typography>Teléfono: {tutor.telefono}</Typography>
                <Typography>Dirección: {tutor.direccion}</Typography>
                <Typography>Parentesco: {tutor.parentesco}</Typography>

            </Paper>
        </Box>
    );
};

export default DetalleTutores;