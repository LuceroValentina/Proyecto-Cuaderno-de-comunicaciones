import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, getDoc, doc, query, where, getDocs } from "firebase/firestore";
import emailjs from "emailjs-com";

export default function FormCrearNotifica() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [correo, setCorreo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !fecha.trim() || !mensaje.trim()) {
      alert("Completá todos los campos");
      return;
    }


    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "notas"), {
        nombre,
        fecha: new Date(fecha),
        mensaje,
        correo,
        creadoEn: serverTimestamp(),
        firmaUrl: ""
      });

      console.log("Nota creada con ID:", docRef.id);
      const alumnoRef = doc(db, "alumnos", correo);
      const alumnoSnap = await getDoc(alumnoRef);

      if (alumnoSnap.exists()) {
        const datos = alumnoSnap.data();
        const tutoresRef = collection(db, "tutores");
        const q = query(tutoresRef, where("correohijos", "array-contains", correo));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          alert("No se encontró un tutor asignado a este alumno");
          return;
        }

        const tutor = querySnapshot.docs[0].data();
        const correoTutor = tutor.correo;



        if (correoTutor) {
          await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
              to_email: correoTutor,
              to_name: `${datos.nombre} ${datos.apellido}`,
              nombre_preceptor: nombre,
              fecha,
              mensaje,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          );
          console.log(
            "Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID,
            "Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            "Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          );


          console.log("Correo enviado a:", correoTutor);
          alert("Nota enviada y correo enviado al tutor ");
        } else {
          alert("El alumno no tiene correoTutor registrado");
        }
      } else {
        alert("No se encontró el alumno con ese correo");
      }

      setNombre("");
      setFecha("");
      setMensaje("");
      setCorreo("");
      navigate(-1);
    } catch (error) {
      console.error("Error específico de EmailJS:", error);

      alert("Ocurrió un error al enviar la nota");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 min-w-[300px] max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 space-y-4"
      >
        <h2 className="font-bold text-2xl mb-2 text-gray-800">
          Crear nota
        </h2>

        <div className="space-y-4 w-60">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Ingresá tu nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="block w-full rounded-md border border-gray-300 py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Seleccioná la fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="block w-full rounded-md border border-gray-300 py-2 px-3"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Correo del alumno:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="ej: alumno@gmail.com"
              className="block w-full rounded-md border border-gray-300 py-2 px-3"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Escribí tu comunicación:</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="4"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 resize-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </form>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer"
      >
        Volver
      </button>
    </div>
  );
}
