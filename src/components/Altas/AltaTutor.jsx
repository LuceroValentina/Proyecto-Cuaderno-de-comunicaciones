import React, { useState } from 'react';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material';
import { crearTutor } from '../../hooks/useTutores';
import { db } from '../../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const AltaTutor = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    direccion: "",
    parentesco: "",
    correohijos: "" 
  });

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarEmail(form.correo)) {
      alert("Ingrese un correo válido para el tutor");
      return;
    }

    const hijosArray = form.correohijos
      .split(',')
      .map(c => c.trim())
      .filter(c => c !== '');

    const ok = await crearTutor({
      ...form,
      correohijos: hijosArray
    });

    if (!ok) {
      alert("Error al dar de alta al tutor");
      return;
    }

    try {
      for (const correoHijo of hijosArray) {
        const alumnoRef = doc(db, "alumnos", correoHijo);
        const alumnoSnap = await getDoc(alumnoRef);

        if (alumnoSnap.exists()) {
          await updateDoc(alumnoRef, {
            correoTutor: form.correo
          });
          console.log(`Vinculado alumno ${correoHijo} con tutor ${form.correo}`);
        } else {
          console.warn(`El alumno ${correoHijo} no existe todavía en la colección`);
        }
      }

      alert("Tutor dado de alta correctamente y alumnos vinculados");
      setForm({
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        direccion: "",
        parentesco: "",
        correohijos: ""
      });
    } catch (error) {
      console.error("Error al vincular alumnos con tutor:", error);
      alert("Tutor creado, pero hubo un error al vincular con los alumnos");
    }
  };

  return (
    <Paper sx={{ p: 2, mt: 3, maxWidth: 450, margin: 'auto', backgroundColor: 'white' }}>
      <Typography textAlign="center" variant="h6" gutterBottom>Alta de Tutor</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center">
          {['nombre', 'apellido', 'telefono', 'correo', 'direccion', 'parentesco', 'correohijos'].map((field) => (
            <TextField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={form[field]}
              onChange={handleChange}
              fullWidth
              required
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 1,
                width: 300,
                '& .MuiInputBase-root': { height: 40 }
              }}
              helperText={field === 'correohijos'
                ? "Si tiene varios alumnos, separá los correos con comas (,)"
                : ""}
            />
          ))}
          <Button type="submit" variant="contained" color="primary">Guardar</Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default AltaTutor;
