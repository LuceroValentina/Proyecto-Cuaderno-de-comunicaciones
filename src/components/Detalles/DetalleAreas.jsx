import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleAreas = () => {
    const { id } = useParams();
    const [Areas, setAreas] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const docRef = doc(db, "Areas", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setAreas({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setAreas(null);
                }
            } catch (error) {
                console.error("Error obteniendo las areas:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchAreas();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!Areas) return <h2>No se encontró el area de tu busqueda</h2>

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
                    Detalle del area:
                </Typography>

                <Typography>Nombre del area: {Areas.nombre}</Typography>
                <Typography>Materia: {Areas.correlativa}</Typography>
            </Paper>
        </Box>
    );
}

export default DetalleAreas;