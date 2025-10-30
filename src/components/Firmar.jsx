import React, { useRef, useState } from "react";
import { subirArchivo } from "../utils/dropbox";

export default function ComponenteFirmar() {
  const canvasRef = useRef(null);
  const [dibujando, setDibujando] = useState(false);

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
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png"); // Imagen base64
    const blob = await (await fetch(dataURL)).blob();
    await subirArchivo(blob, `firma_${Date.now()}.png`);
    alert("Firma subida a Dropbox!");
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        style={{ border: "1px solid black" }}
        onMouseDown={empezarDibujo}
        onMouseMove={dibujar}
        onMouseUp={terminarDibujo}
        onMouseLeave={terminarDibujo}
      />
      <button onClick={guardarFirma}>Guardar firma</button>
    </div>
  );
}
