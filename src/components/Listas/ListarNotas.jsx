import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Box, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";


export default function ListarNotas() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "notas"));
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
                < Typography textAlign="center" variant="h6" gutterBottom>Lista de datos Notas</Typography>
                <List>
                    {datos.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{ bgcolor: "grey.100", borderRadius: 2, mb: 1 }}
                        >
                            <ListItemText
                                secondary={
                                    <>
                                        Nota: {item.nota} <br />
                                        Texto: {item.texto} <br />
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper></Box >

    );

}