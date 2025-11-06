---
## Descripción de las carpetas principales

### components/
Contiene la mayor parte del desarrollo en React.  
Cada componente representa una vista, formulario o módulo funcional del sistema (por ejemplo, altas, listados, pantallas o reportes).

### hooks/
Incluye **custom hooks** que encapsulan la lógica de conexión a Firebase y manejo de datos de cada entidad (alumnos, profesores, materias, etc.).

### firebase/
Centraliza la configuración de Firebase, incluyendo las credenciales del proyecto y la inicialización del servicio.

### context/
Define los contextos globales, como el de autenticación, para compartir estado entre componentes sin necesidad de props.

### css/
Contiene las hojas de estilo personalizadas, utilizadas para definir la apariencia de cada pantalla o sección del sistema.

### utils/
Guarda funciones o módulos auxiliares que pueden reutilizarse en distintas partes de la app.


## Tecnologías principales utilizadas
**React.js** –> Biblioteca principal para el desarrollo de la interfaz.
**Firebase** –> Base de datos y autenticación.
**Tailwind CSS** –> Framework de estilos para diseño rápido y responsivo.
**React Router DOM** –> Manejo de rutas y navegación.
**Context API** –> Gestión de estados globales.
**JavaScript (ES6+)** –> Lenguaje de programación base.
