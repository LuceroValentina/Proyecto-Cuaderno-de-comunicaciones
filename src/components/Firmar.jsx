import { useRef, useState, useEffect } from "react";
import { Dropbox } from "dropbox";

export default function Firmar({ notaId, onFirmaGuardada }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  const dbx = new Dropbox({
    accessToken: process.env.REACT_APP_DROPBOX_TOKEN,
    fetch,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
  }, []);

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const endDrawing = () => setDrawing(false);

  const handleLimpiar = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const handleGuardar = async () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");
    const blob = await (await fetch(dataUrl)).blob();

    try {
      // Guardar en Dropbox
      const filename = `/firma_${notaId}_${Date.now()}.png`;
      const response = await dbx.filesUpload({ path: filename, contents: blob });
      // Obtener enlace compartido
      const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({ path: response.path_lower });
      // Dropbox devuelve URL con ?dl=0, cambiamos a ?raw=1 para mostrar la imagen directamente
      const urlDirecta = sharedLink.url.replace("?dl=0", "?raw=1");

      // Devolvemos la URL al componente padre
      onFirmaGuardada(urlDirecta);
    } catch (error) {
      console.error("Error al subir la firma a Dropbox:", error);
      alert("Ocurrió un error al subir la firma");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold">Dibujá tu firma</h3>
      <canvas
        ref={canvasRef}
        className="border"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleLimpiar}
          className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Limpiar
        </button>
        <button
          type="button"
          onClick={handleGuardar}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Guardar Firma
        </button>
      </div>
    </div>
  );
}
