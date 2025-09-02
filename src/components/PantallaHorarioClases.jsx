import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HorariodeClases() {
    const navigate = useNavigate();
    const horas = ['1', '2', '3', '4', '5', '6', '7'];
    const turnos = ['Turno Mañana', 'Turno Tarde', 'Turno Vespertino'];
    const horariovesp = ['18:00-18:40', '18:40-19:20', '18:00-19:20', '19:30-20:50', '19:30-20:10', '20:10-20:50', '21:00-21:40', '21:40-22:20', '21:00-22:20', '22:20-23:00'];
    const horariotarde = ['13:30-14:10', '14:10-14:50', '13:30-14:50', '15:00-16:20', '15:00-15:40', '15:40-16:20', '16:30-17:10', '17:10-17:50', '16:30-17:50'];
    const horariomana = ['08:00-08:40', '08:40-09:20', '08:00-09:20', '09:30-10:50', '09:30-10:10', '10:10-10:50', '11:00-11:40', '11:40-12:20', '11:00-12:20'];
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const [texto, setTexto] = useState("");
    const [selectedHora, setSelectedHora] = useState(horas[0]);
    const [selectedTurno, setSelectedTurno] = useState(turnos[0]);
    const [selectedHorario, setSelectedHorario] = useState(horariomana[0]);
    const [selectedDia, setSelectedDia] = useState(dias[0]);

    let horarios;
    if (selectedTurno === 'Turno Mañana') horarios = horariomana;
    else if (selectedTurno === 'Turno Tarde') horarios = horariotarde;
    else horarios = horariovesp;



    return (
        <div className='flex items-center justify-center min-h-screen '>
            <form className="w-1/2 min-w-[300px] max-w-sm bg-gray-100 h-140 rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 space-y-4">
                <div className="font-bold text-xl mb-2 ">Horarios de Clases</div>
                <div className="space-y-4 w-40" >
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Seleccioná la hora:
                        </label>
                        <select
                            value={selectedHora}
                            onChange={(e) => setSelectedHora(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {horas.map((hora) => (
                                <option key={hora} value={hora}>
                                    {hora}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Seleccioná el turno:
                        </label>
                        <select
                            value={selectedTurno}
                            onChange={(e) => setSelectedTurno(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {turnos.map((turno) => (
                                <option key={turno} value={turno}>
                                    {turno}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Seleccioná el horario:
                        </label>
                        <select
                            value={selectedHorario}
                            onChange={(e) => setSelectedHorario(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {horarios.map((hora) => (
                                <option key={hora} value={hora}>
                                    {hora}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Seleccioná el dia:
                        </label>
                        <select
                            value={selectedDia}
                            onChange={(e) => setSelectedDia(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {dias.map((dia) => (
                                <option key={dia} value={dia}>
                                    {dia}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Escriba la materia:
                        </label>
                        <textarea
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                            placeholder="Escriba la materia"
                            className="w-full border-gray-400 p-2 border rounded-md"
                            rows="3" 
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
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
