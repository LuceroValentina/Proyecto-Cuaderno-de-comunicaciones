import React from 'react';
import "../../css/Contactos.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";


const contacts = [
  { icon: "/imagenes/icono_facebook.png", label: 'EPET20', link: 'https://www.facebook.com/epet20' },
  { icon: "/imagenes/icono_web.png", label: 'www.epet20.edu.ar', link: 'http://www.epet20.edu.ar' },
  { icon: "/imagenes/icono_instagram.png", label: '@epet20educacion', link: 'https://www.instagram.com/epet20educacion' },
  { icon: "/imagenes/icono_ubicacion.png", label: 'Lanín 2020', link: 'https://maps.app.goo.gl/Sxcbmk3Qy5Cx5vhC6' },
  { icon: "/imagenes/icono_telefono.png", label: '2994478052 (Secretaría) - 2996263648 (Taller)' }
];
const PantallaContactos = () => {
  const navigate = useNavigate();
return(
  <div className="seccion-contactos">
    <h1>Contactos</h1>
    <div className="lista-contactos">
      {contacts.map((contact, index) => (
        <div className="contacto" key={index}>
          <img src={contact.icon} alt="icono" />
          {contact.link ? (
            <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.label}</a>
          ) : (
            <span className="telefono-contacto">{contact.label}</span>
          )}
        </div>
      ))}
    </div>
    <button
      onClick={() => navigate("/secciones")}
      className="volver fixed bottom-6 right-6 w-20 h-8 bg-[#3d6490] text-white rounded cursor-pointer flex items-center justify-center"
    >
      Volver
    </button>
  </div>
  );
}
export default PantallaContactos;
