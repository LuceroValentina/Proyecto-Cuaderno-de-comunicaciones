import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleMesa = () => {
    const { id } = useParams();
    const [Mesa, setMesa] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMesa = async () => {
            try {
                const docRef = doc(db, "Mesa de examén", id);
                const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setMesa({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setMesa(null);
                }
            } catch (error) {
                console.error("Error obteniendo mesa de examén", error);
            } finally {
                setLoading(false);
            }

        };

        fetchMesa();
    }, [id]);

    if (loading) return <h2>Cargando...</h2>
    if (!Mesa) return <h2>No se encontró la mesa de examen</h2>

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
                    Detalle de la mesa de examen:
                </Typography>

                <Typography>Tipo de Mesa de Examén: {Mesa.tipodemesa}</Typography>
                <Typography>1er Materia a Rendir: {Mesa.materia1}</Typography>
                <Typography>2da Materia a Rendir: {Mesa.materia2}</Typography>
                <Typography>3era Materia a Rendir: {Mesa.materia3}</Typography>
                <Typography>4ta Materia a Rendir: {Mesa.materia4}</Typography>
                <Typography>¿Finaliza los estudios?: {Mesa.findeestudio}</Typography>
            </Paper>
        </Box>
    );
}

export default DetalleMesa;