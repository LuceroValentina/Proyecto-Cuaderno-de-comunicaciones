import React from 'react';
import PantallaInicio from './components/PantallaInicio';
import PantallaBiblioteca from './components/PantallaBiblioteca';
import PantallaTeoria from './components/PantallaTeoria';
import PantallaEditar from './components/PantallaEditar';
import PantallaTaller from './components/PantallaTaller';

function App() {
  return (
    <div className='fondo'>
      &nbsp;
      <PantallaTeoria/>
    </div>
  );
}//Para acceder a la pestaña biblioteca <PantallaBiblioteca/> y borrar <PantallaInicio/>
export default App;
