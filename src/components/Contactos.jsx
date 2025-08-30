import React from 'react';
import "../css/Contactos.css";
import "../css/Elementos.css";
import icono_facebook from '../imagenes/icono_facebook.png';
import icono_web from '../imagenes/icono_web.png';
import icono_instagram from '../imagenes/icono_instagram.png';
import icono_ubicacion from '../imagenes/icono_ubicacion.png';
import icono_telefono from '../imagenes/icono_telefono.png';

const contacts = [
  { icon: icono_facebook, label: 'EPET20', link: 'https://www.facebook.com/epet20' },
  { icon: icono_web, label: 'www.epet20.edu.ar', link: 'http://www.epet20.edu.ar' },
  { icon: icono_instagram, label: '@epet20educacion', link: 'https://www.instagram.com/epet20educacion' },
  { icon: icono_ubicacion, label: 'Lanín 2020', link: 'https://maps.app.goo.gl/Sxcbmk3Qy5Cx5vhC6' },
  { icon: icono_telefono, label: '2994478052 (Secretaría) - 2996263648 (Taller)' }
];

const Contactos = () => (
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
    <button className="boton-volver" onClick={() => window.history.back()}>Volver</button>
  </div>
);
export default Contactos;
