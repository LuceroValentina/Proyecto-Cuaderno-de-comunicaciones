import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetallePreceptores = () => {
    const { id } = useParams();
    const correo = decodeURIComponent(id);
    const [preceptor, setPreceptor] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPreceptor = async () => {
            try {
                const docRef = doc(db, "preceptores", correo);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setPreceptor({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setPreceptor(null);
                }
            } catch (error) {
                console.error("Error obteniendo preceptores:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchPreceptor();
    }, [correo]);

    if (loading) return <h2>Cargando...</h2>
    if (!preceptor) return <h2>No se encontró el preceptor</h2>

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
                    Detalle del preceptor
                </Typography>

                <Typography>ID: {preceptor.correo}</Typography>
                <Typography>Nombre: {preceptor.nombre}</Typography>
                <Typography>Apellido: {preceptor.apellido}</Typography>
                <Typography>DNI: {preceptor.dni}</Typography>
                <Typography>Teléfono: {preceptor.telefono}</Typography>
                <Typography>Dirección: {preceptor.direccion}</Typography>
                <Typography>Género: {preceptor.genero}</Typography>
                <Typography>Turno: {preceptor.turno}</Typography>
                <Typography>Curso: {preceptor.curso}</Typography>
            </Paper>
        </Box>
    );
};

export default DetallePreceptores;