import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HorarioContraturno() {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const [selectedDia, setSelectedDia] = useState(dias[0]);
    const [texto, setTexto] = useState("");
    const navigate = useNavigate();
    
    return (
        <div className='flex items-center justify-center min-h-screen '>
            <form className="w-1/2 min-w-[300px] max-w-sm h-130 bg-gray-100 rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 space-y-4">
                <div className="font-bold text-xl mb-2 ">Horarios de Contraturno</div>

                <div className="space-y-4 w-40" >
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Seleccioná el dia:
                        </label>
                        <select
                            value={selectedDia}
                            onChange={(e) => setSelectedDia(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        >
                            {dias.map((dia) => (
                                <option key={dia} value={dia}>
                                    {dia}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <textarea
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                            placeholder="Escriba el horario"
                            className="w-full p-2 border rounded-md"
                            rows="5"
                        />
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
