import React, { useState } from 'react';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material';
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/firebase';
import { crearTutor } from '../hooks/useTutores';

const AltaTutor = () => {
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        parentesco: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tutorGuardado = await crearTutor(form);
        if (tutorGuardado) {
            alert("Tutor dado de alta correctamente");
            setForm({
                nombre: "",
                apellido: "",
                telefono: "",
                direccion: "",
                parentesco: ""
            });
        } else {
            alert("Error al dar de alta al tutor");
        }
    };

    return (
        <Paper sx={{ p: 2, mt: 3, maxWidth: 500, margin: 'auto', backgroundColor: 'white' }}>
                    <Typography textAlign="center" variant="h6" gutterBottom>Alta de Profesor</Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}  alignItems="center">
                            {['nombre', 'apellido', 'telefono', 'direccion', 'parentesco'].map((field) => (
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

export default AltaTutor;