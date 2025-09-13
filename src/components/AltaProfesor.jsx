import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/firebase';
import { crearProfesor } from '../hooks/useProfesores';

const AltaProfesor = () => {
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        telefono: "",
        direccion: "",
        genero: "",
        materia: "",
        curso: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profesorGuardado = await crearProfesor(form);
        if (profesorGuardado) {
            alert("Profesor dado de alta correctamente");
            setForm({
                nombre: "",
                apellido: "",
                dni: "",
                telefono: "",
                direccion: "",
                genero: "",
                materia: "",
                curso: ""
            });
        } else {
            alert("Error al dar de alta al profesor");
        }
    };

    return (
        <Paper sx={{ p: 4, mt: 3 }}>
            <Typography variant="h6" gutterBottom>Alta de Profesor</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {['nombre', 'apellido', 'dni', 'telefono', 'direccion', 'genero', 'materia','curso'].map((field) => (
                        <Grid item xs={12} sm={6} key={field}>
                            <TextField
                                label={field.charAt(0).toUpperCase() + field.slice(1)}
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Guardar</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default AltaProfesor;