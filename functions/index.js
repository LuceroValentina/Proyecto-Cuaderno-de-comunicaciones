const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
const db = admin.firestore();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "hernandez.brisa.epet20@gmail.com",
        pass: "kboq rfoy fatw gpij",
    },
});

exports.notificarCalificacionTutor = functions.firestore
    .document("calificacion/{caliId}")
    .onCreate(async(snapshot) => {
        const dataNota = snapshot.data();

        const correoAlumno = dataCali.correoAlumno; // Email que se usó como ID del alumno
        const calificacion = dataCali.calificacion;
        const fecha = dataCali.fecha;

        try {
            // Buscamos al alumno por su mail
            const alumnosRef = db.collection("alumnos");
            const query = await alumnosRef.where("correo", "==", correoAlumno).get();

            if (query.empty) {
                console.log("Alumno no encontrado");
                return;
            }

            const alumno = query.docs[0].data();
            const correoTutor = alumno.correoTutor;

            // Enviar correo
            await transporter.sendMail({
                from: '"Colegio" <hernandez.brisa.epet20@gmail.com>',
                to: correoTutor,
                subject: `Nueva calificación de ${alumno.nombre}`,
                html: `
          <h3>Se registró una nueva calificación</h3>
          <p><b>Alumno:</b> ${alumno.nombre} ${alumno.apellido}</p>
          <p><b>Calificación:</b> ${calificacion}</p>
          <p><b>Fecha:</b> ${fecha}</p>
          <br/>
          <p>Este es un mensaje automático del sistema escolar.</p>
        `,
            });

            console.log("Correo enviado a:", correoTutor);
        } catch (error) {
            console.error("Error enviando correo:", error);
        }
    });