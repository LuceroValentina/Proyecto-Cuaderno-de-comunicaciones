import React from 'react';
import PantallaInicio from './components/PantallaInicio';
import PantallaBiblioteca from './components/PantallaBiblioteca';
import PantallaTeoria from './components/PantallaTeoria';
import PantallaEditar from './components/PantallaEditar';
import PantallaTaller from './components/PantallaTaller';
import PantallaSecciones from './components/PantallaSecciones';
import PantallaEducacionFisica from './components/PantallaEducacionFisica';
import PantallaHorarioClases from './components/PantallaHorarioClases';
//import Contactos from './components/Contactos';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='fondo'>
      &nbsp;
      <BrowserRouter>
        <Routes>
          {/*<Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/*" element={user ? <AppRouter user={user} /> : <Navigate to="/login" />} /> 
        estas enrutaciones son del login*/}
          <Route path="/login" element={<PantallaInicio />} />
          <Route path="/secciones" element={<PantallaSecciones />} />
          <Route path="/seccion_teoria" element={<PantallaTeoria />} />
          <Route path="/seccion_taller" element={<PantallaTaller />} />
          <Route path="/seccion_biblioteca" element={<PantallaBiblioteca />} />
          <Route path="/seccion_edfisica" element={<PantallaEducacionFisica />} />
          <Route path="/horariosteoria" element={<PantallaHorarioClases />} />

          {/*<Route path="/seccion_contactos" element={<Contactos/>} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}//Para acceder a la pestaña biblioteca <PantallaBiblioteca/> y borrar <PantallaInicio/>
export default App;
