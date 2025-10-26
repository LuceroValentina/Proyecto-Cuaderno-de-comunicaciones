import React from "react";

const TablaRetiros = ({ retiros, onEliminar }) => {
  if (retiros.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-8 text-lg">
        No hay retiros registrados aún.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">Fecha</th>
            <th className="py-3 px-4 text-left font-semibold">Ingreso</th>
            <th className="py-3 px-4 text-left font-semibold">Retiro</th>
            <th className="py-3 px-4 text-left font-semibold">Motivo</th>
            <th className="py-3 px-4 text-left font-semibold">Firma Preceptor</th>
            <th className="py-3 px-4 text-center font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {retiros.map((r, index) => (
            <tr
              key={r.id || index}
              className="border-t hover:bg-blue-50 transition duration-200"
            >
              <td className="py-2 px-4">{r.fecha}</td>
              <td className="py-2 px-4">{r.ingreso}</td>
              <td className="py-2 px-4">{r.retiro}</td>
              <td className="py-2 px-4">{r.motivo}</td>
              <td className="py-2 px-4">{r.firmaprecep}</td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => onEliminar(r.id)}
                  className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaRetiros;

