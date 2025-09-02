import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormularioMensaje() {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nombre, fecha, mensaje });
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form 
                onSubmit={handleSubmit}
                className="w-1/2 min-w-[300px] max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 space-y-4"
            >
                <div className="font-bold text-xl mb-2">Formulario de Mensaje</div>
                <div className="space-y-4 w-60">

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Ingresá tu nombre:
                        </label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Seleccioná la fecha:
                        </label>
                        <input
                            type="date"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Escribí tu comunicación:
                        </label>
                        <textarea
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            rows="4"
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none resize-none"
                            required
                        />
                    </div>

                    <div className='flex justify-center'>
                        <button 
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        >
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