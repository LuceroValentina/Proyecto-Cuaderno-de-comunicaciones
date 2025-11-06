/**
 * @file PantallaContactos.jsx
 * @description Componente que muestra la pantalla de "Contactos" de la institución.
 * Presenta una lista de medios de comunicación oficiales, con íconos y enlaces hacia redes sociales, 
 * sitio web, ubicación y números telefónicos.
 */
import React from 'react';
import "../../css/Contactos.css";
import "../../css/Elementos.css";
import { useNavigate } from "react-router-dom";

/**
 * @constant contacts
 * @type {Array<Object>}
 * @description Arreglo de objetos que contiene la información de contacto de la institución.
 * Cada objeto puede incluir un ícono, un texto descriptivo y opcionalmente un enlace externo.
 * 
 * @property {string} icon - Ruta del ícono representativo del medio de contacto.
 * @property {string} label - Texto visible que describe el medio de contacto.
 * @property {string} [link] - Enlace URL opcional que se abre en una nueva pestaña.
 */
const contacts = [
  { icon: `${process.env.PUBLIC_URL}/imagenes/icono_facebook.png`, label: 'EPET20', link: 'https://www.facebook.com/epet20' },
  { icon: `${process.env.PUBLIC_URL}/imagenes/icono_web.png`, label: 'www.epet20.edu.ar', link: 'http://www.epet20.edu.ar' },
  { icon: `${process.env.PUBLIC_URL}/imagenes/icono_instagram.png`, label: '@epet20educacion', link: 'https://www.instagram.com/epet20educacion' },
  { icon: `${process.env.PUBLIC_URL}/imagenes/icono_ubicacion.png`, label: 'Lanín 2020', link: 'https://maps.app.goo.gl/Sxcbmk3Qy5Cx5vhC6' },
  { icon: `${process.env.PUBLIC_URL}/imagenes/icono_telefono.png`, label: '2994478052 (Secretaría) - 2996263648 (Taller)' }
  
];

/**
 * @component PantallaContactos
 * @description Renderiza la pantalla de contactos de la institución educativa.
 * Muestra los diferentes medios de contacto (redes, web, ubicación y teléfono)
 * y un botón para regresar al menú de secciones.
 * 
 * @returns {JSX.Element} Estructura visual de la pantalla de contactos.
 */
const PantallaContactos = () => {
  /**
   * @constant navigate
   * @type {Function}
   * @description Hook de React Router para la navegación programática entre rutas.
   */
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
