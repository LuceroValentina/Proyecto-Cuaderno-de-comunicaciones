import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Box, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";


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
                            sx={{ bgcolor: "grey.100", borderRadius: 2, mb: 1 }}
                        >
                            <ListItemText
                                secondary={
                                    <>
                                        Nombre: {item.nombre} <br />
                                        Apellido: {item.apellido} <br />
                                        DNI: {item.dni} <br />
                                        Teléfono: {item.telefono} <br />
                                        Dirección: {item.direccion} <br />
                                        Género: {item.genero} <br />
                                        Curso: {item.curso}<br />
                                        Turno: {item.turno} 
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper></Box >

    );

}