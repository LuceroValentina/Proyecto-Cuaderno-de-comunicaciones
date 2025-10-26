import React, { useState, useEffect } from "react";

const FormRetiros = ({ onAgregar }) => {
  const [form, setForm] = useState({
    fecha: "",
    ingreso: "",
    retiro: "",
    motivo: "",
    firmaprecep: "",
    firmatutor: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fecha || !form.ingreso || !form.retiro || !form.motivo) {
      setError("Por favor, complete todos los campos obligatorios.");
      return;
    }

    const ahora = new Date();
    const fechaIngresada = new Date(`${form.fecha}T00:00:00`);
    const horaIngreso = new Date(`${form.fecha}T${form.ingreso}`);
    const horaRetiro = new Date(`${form.fecha}T${form.retiro}`);

    if (fechaIngresada > ahora) {
      setError("La fecha no puede ser posterior al día actual.");
      return;
    }

    const esHoy = fechaIngresada.toDateString() === ahora.toDateString();
    if (esHoy && horaIngreso > ahora) {
      setError("La hora de ingreso no puede ser mayor a la hora actual.");
      return;
    }

    if (horaRetiro <= horaIngreso) {
      setError("La hora de retiro debe ser posterior a la de ingreso.");
      return;
    }

    onAgregar(form);

    setForm({
      fecha: "",
      ingreso: "",
      retiro: "",
      motivo: "",
      firmaprecep: "",
      firmatutor: "",
    });

    setError("");
  };

  return (
    <form
      className="form-retiro flex flex-col gap-3 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-blue-800 text-center mb-2">
        Registrar Retiro de Taller
      </h2>

      {error && (
        <p className="text-red-600 bg-red-50 border border-red-300 rounded p-2 text-sm">
          {error}
        </p>
      )}

      <label className="font-medium text-gray-700" htmlFor="fecha">
        Fecha:
      </label>
      <input
        name="fecha"
        type="date"
        value={form.fecha}
        onChange={handleChange}
        required
        className="border rounded px-3 py-2"
      />

      <label className="font-medium text-gray-700" htmlFor="ingreso">
        Hora de ingreso:
      </label>
      <input
        name="ingreso"
        type="time"
        value={form.ingreso}
        onChange={handleChange}
        required
        className="border rounded px-3 py-2"
      />

      <label className="font-medium text-gray-700" htmlFor="retiro">
        Hora de retiro:
      </label>
      <input
        name="retiro"
        type="time"
        value={form.retiro}
        onChange={handleChange}
        required
        className="border rounded px-3 py-2"
      />

      <label className="font-medium text-gray-700" htmlFor="motivo">
        Motivo:
      </label>
      <input
        name="motivo"
        type="text"
        placeholder="Motivo del retiro"
        value={form.motivo}
        onChange={handleChange}
        required
        className="border rounded px-3 py-2"
      />

      <label className="font-medium text-gray-700" htmlFor="firmaprecep">
        Firma del Preceptor:
      </label>
      <input
        name="firmaprecep"
        type="text"
        value={form.firmaprecep}
        onChange={handleChange}
        className="border rounded px-3 py-2"
      />

      <button
        type="submit"
        className="mt-4 bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-800 transition"
      >
        Registrar
      </button>
    </form>
  );
};

export default FormRetiros;
