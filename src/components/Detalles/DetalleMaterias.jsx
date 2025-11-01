import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleMaterias = () => {
    const { id } = useParams();
    const [Materias, setMaterias] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMaterias = async () => {
            try {
                const docRef = doc(db, "Materias", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setMaterias({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setMaterias(null);
                }
            } catch (error) {
                console.error("Error obteniendo las materias:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchMaterias();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!Materias) return <h2>No se encontró la materia de tu busqueda</h2>

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
                    Detalle de la materia:
                </Typography>

                <Typography>Nombre de la materia: {Materias.nombre}</Typography>
                <Typography>Indique su correlativa: {Materias.correlativa}</Typography>
            </Paper>
        </Box>
    );
}

export default DetalleMaterias;