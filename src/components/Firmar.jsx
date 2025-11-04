import React, { useRef, useState } from "react";
import { subirArchivo } from "../utils/dropbox";

export default function Firmar({ onGuardar }) {
  const canvasRef = useRef(null);
  const [dibujando, setDibujando] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const empezarDibujo = (e) => {
    setDibujando(true);
    const ctx = canvasRef.current.getContext("2d");
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const dibujar = (e) => {
    if (!dibujando) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const terminarDibujo = () => setDibujando(false);

  const guardarFirma = async () => {
    try {
      setGuardando(true);
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL("image/png");
      const blob = await (await fetch(dataURL)).blob();
      const url = await subirArchivo(blob, `firma_${Date.now()}.png`); 
      alert("Firma subida a Dropbox!");
      if (onGuardar) onGuardar(url); 
    } catch (error) {
      console.error("Error subiendo la firma:", error);
      alert("Ocurrió un error al guardar la firma");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        style={{ border: "2px solid black", borderRadius: "8px" }}
        onMouseDown={empezarDibujo}
        onMouseMove={dibujar}
        onMouseUp={terminarDibujo}
        onMouseLeave={terminarDibujo}
      />
      <button
        onClick={guardarFirma}
        disabled={guardando}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition disabled:opacity-60"
      >
        {guardando ? "Guardando..." : "Guardar firma"}
      </button>
    </div>
  );
}
