import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Box, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function ListarHorarios() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "horarios"));
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
                < Typography textAlign="center" variant="h6" gutterBottom>Lista de datos Horarios</Typography>
                <List>
                    {datos.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{ bgcolor: "grey.100", borderRadius: 2, mb: 1, textDecoration: "none", color: "inherit" }}
                        >
                            <ListItemText
                                secondary={
                                    <>
                                        <span>Hora: {item.hora}</span>
                                        <span>Turno: {item.turno} </span>
                                        <span>Dia: {item.dia}</span>
                                        <span>Materia: {item.materia}</span>
                                        <span>
                                            <link to={`/detallehorarios/${item.id}`}style={{ textDecoration: "none", color:"#1976d2"}}>
                                            Ver detalle
                                            </link>
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