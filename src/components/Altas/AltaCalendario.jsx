import React, { useState } from 'react';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material';
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/firebase';
import { crearCalendario } from '../../hooks/useCalendario';

const AltaCalendario = () => {
    const [form, setForm] = useState({
        dia: "",
        mes: "",
        estado: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const calendarioGuardado = await crearCalendario(form);
        if (calendarioGuardado) {
            alert("calendario dado de alta correctamente");
            setForm({
                dia: "",
                mes: "",
                estado: ""
            });
        } else {
            alert("Error al dar de alta el calenndario ");
        }
    };

    return (
        <Paper sx={{ p: 2, mt: 3, maxWidth: 450, margin: 'auto', backgroundColor: 'white' }}>
            <Typography textAlign="center" variant="h6" gutterBottom>Alta de Calendario</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}  alignItems="center">
                    {['dia', 'mes', 'estado'].map((field) => (
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

export default AltaCalendario;