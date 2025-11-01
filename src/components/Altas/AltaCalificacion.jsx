import React, { useState } from 'react';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material';
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/firebase';
import { crearCalificacion } from '../../hooks/useCalificaciones';

const AltaCalificacion = () => {
    const [form, setForm] = useState({
        calificacion: "",
        texto: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const calificacionGuardado = await crearCalificacion(form);
        if (calificacionGuardado) {
            alert("Calificacion dada de alta correctamente");
            setForm({
              calificacion: "",
              texto: ""
            });
        } else { 
            alert("Error al dar de alta la calificacion ");
        }
    };

    return (
        <Paper sx={{ p: 2, mt: 3, maxWidth: 450, margin: 'auto', backgroundColor: 'white' }}>
            <Typography textAlign="center" variant="h6" gutterBottom>Alta de Calificacion</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}  alignItems="center">
                    {['dia', 'mes'].map((field) => (
                        <TextField
                            key={field}
                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                            fullWidth
                            required
                            sx={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 1, width: 300, '& .MuiInputBase-root': { height: 40 } }}
                        />
                    ))}
                    <Button type="submit" variant="contained" color="primary">Guardar</Button>
                </Stack>
            </form>
        </Paper>
    );
};

export default AltaCalificacion;