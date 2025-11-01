import React, { useState } from 'react';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material';
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/firebase';
import { crearFirma } from '../../hooks/useFirmas';

const AltaFirma = () => {
    const [form, setForm] = useState({
        firma: "",
        aclaración: "",
        responsable: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firmaGuardado = await firmaProfesor(form);
        if (firmaGuardado) {
            alert("Firma dada de alta correctamente");
            setForm({
                firma: "",
                aclaración: "",
                responsable: ""
            });
        } else {
            alert("Error al dar de alta la firma");
        }
    };

    return (
        <Paper sx={{ p: 2, mt: 3, maxWidth: 500, margin: 'auto', backgroundColor: 'white' }}>
                    <Typography textAlign="center" variant="h6" gutterBottom>Alta de Profesor</Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}  alignItems="center">
                            {['firma', 'aclaración', 'responsable'].map((field) => (
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

export default AltaFirma;