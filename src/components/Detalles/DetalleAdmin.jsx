import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { Box, Paper, Typography } from "@mui/material";

const DetalleAdmins = () => {
    const { id } = useParams();
    const correo = decodeURIComponent(id);
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const docRef = doc(db, "administradores", correo);
                 const docSnap = await getDoc(docRef);


                if (docSnap.exists()) {
                    setAdmin({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setAdmin(null);
                }
            } catch (error) {
                console.error("Error obteniendo administrador:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchAdmin();
    }, [correo]);

    if (loading) return <h2>Cargando...</h2>
    if (!admin) return <h2>No se encontró el admin</h2>

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
                    Detalle del admin
                </Typography>
                <Typography>ID: {admin.id}</Typography>
                <Typography>Nombre: {admin.nombre}</Typography>
                <Typography>Apellido: {admin.apellido}</Typography>
                <Typography>DNI: {admin.dni}</Typography>
                <Typography>Teléfono: {admin.telefono}</Typography>
                <Typography>Dirección: {admin.direccion}</Typography>
                <Typography>Rol: {admin.rol}</Typography>
            
            </Paper>
        </Box>
    );
};

export default DetalleAdmins;