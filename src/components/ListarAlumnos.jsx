import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Box, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";


export default function ListarAlumnos() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "alumnos"));
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
                < Typography textAlign="center" variant="h6" gutterBottom>Lista de datos Alumnos</Typography>
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
                                        Ciclo: {item.ciclo} <br />
                                        Turno: {item.turno} <br />
                                        Curso: {item.curso}
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper></Box >

    );

}