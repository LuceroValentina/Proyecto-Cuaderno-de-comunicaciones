import { useState } from 'react';

export default function HorariodeClases() {
    const dpto = ['Ciclo Superior', 'Ciencias Naturales', 'Ciencias Sociales', 'Dibujo', 'Ed.Física', 'Idioma', 'Lengua y Literatura', 'Matemática y Física'];
    const materia = ['De la especialidad', 'Biología y Química', 'Historia, Geografía y Ed.Cívica', 'Dibujo Técnico', 'Ed.Física', 'Inglés', 'Lengua y Literatura', 'Matemática y Física'];
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

    const [selectedDpto, setSelectedDpto] = useState(dpto[0]);
    const [selectedMaterias, setSelectedMaterias] = useState(materia[0]);
    const [selectedDia, setSelectedDia] = useState(dias[0]);

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <form className="w-1/2 min-w-[300px] max-w-sm h-130 rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 space-y-4">
                <div className="font-bold text-xl mb-2 ">Horarios de Clases de Consulta</div>


                <div className="space-y-4 w-40" >
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Elija Departamento:
                        </label>
                        <select
                            value={selectedDpto}
                            onChange={(e) => setSelectedDpto(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {dpto.map((dpto) => (
                                <option key={dpto} value={dpto}>
                                    {dpto}
                                </option>
                            ))}
                        </select>

                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Elija la Materia:
                        </label>
                        <select
                            value={selectedMaterias}
                            onChange={(e) => setSelectedMaterias(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {materia.map((materia) => (
                                <option key={materia} value={materia}>
                                    {materia}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Elija el Dia:
                        </label>
                        <select
                            value={selectedDia}
                            onChange={(e) => setSelectedDia(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {dias.map((dias) => (
                                <option key={dias} value={dias}>
                                    {dias}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='flex justify-center'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Enviar
                        </button>
                    </div>



                </div>
            </form>
            <button
                onClick={() => navigate("/seccion_teoria")}
                className="absolute bottom-8 right-8 px-6 py-3 bg-[#3d6490] text-white rounded cursor-pointer"
            >
                Volver
            </button>
        </div>
    );
}
