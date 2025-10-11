import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Box, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";


export default function ListarMesas() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "mesas"));
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
                < Typography textAlign="center" variant="h6" gutterBottom>Lista de Mesa de Exmaén</Typography>
                <List>
                    {datos.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{ bgcolor: "grey.100", borderRadius: 2, mb: 1 }} 
                        >
                            <ListItemText
                                secondary={
                                    <>
                                        Tipo de Mesa de Examén: {item.tipomesa} <br />
                                        1er Materia a Rendir: {item.materia1} <br />
                                        2da Materia a Rendir: {item.materia2} <br />
                                        3er Materia a Rendir: {item.materia3} <br />
                                        4ta Materia a Rendir: {item.materia4} <br />
                                        ¿Finaliza los estudios?: {item.findeestudio} <br />
                                        
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper></Box >

    );

}