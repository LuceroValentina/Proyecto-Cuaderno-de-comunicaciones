import React, { useState } from 'react';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material';
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/firebase';
import { crearMesa } from '../hooks/useMesa';

const AltaMesa = () => {
    const [form, setForm] = useState({
        tipomesa: "",
        materia1: "",
        materia2: "",
        materia3: "",
        materia4: "",
        findeestudio: ""       
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mesaGuardada = await crearMesa (form);
        if (mesaGuardada) {
            alert("Mesa cargada correctamente");
            setForm({
                tipomesa: "",
                materia1: "",
                materia2: "",
                materia3: "",
                materia4: "",
                findeestudio: ""
            });
        } else {
            alert("Error al cargar mesa");
        }
    };

    return (
        <Paper sx={{ p: 2, mt: 3, maxWidth: 450, margin: 'auto', backgroundColor: 'white' }}>
            <Typography textAlign="center" variant="h6" gutterBottom>Alta de Mesas</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}  alignItems="center">
                    {['tipomesa', 'materia1', 'materia2', 'meteria3', 'metaria4', 'findeestudio'].map((field) => (
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

export default AltaMesa;