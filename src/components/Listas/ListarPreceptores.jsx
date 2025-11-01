import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Box, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function ListarPreceptores() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "preceptores"));
                const listado = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDatos(listado);
            } catch (error) {
                console.error("Error leyendo datos:", error);

            }
        };

        fetchData();

    }, []);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper sx={{
                p: 4,
                width: "50vw",
                height: "60vh",
                backgroundColor: "white",
                overflow: "auto",
            }}>
                < Typography textAlign="center" variant="h6" gutterBottom>Lista de datos Preceptores</Typography>
                <List>
                    {datos.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{ bgcolor: "grey.100", borderRadius: 2, mb: 1, textDecoration: "none", color: "inherit" }}
                        >
                            <ListItemText
                                secondary={
                                    <>
                                        <span> Nombre y Apellido: {`${item.nombre} ${item.apellido}`} </span>
                                        <span>Curso: {item.curso} </span>
                                        <span>
                                            <Link to={`/detallepreceptor/${encodeURIComponent(item.id)}`} style={{ textDecoration: "none", color: "#1976d2" }}>
                                                Ver detalle
                                            </Link>
                                        </span>
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper></Box >

    );

}