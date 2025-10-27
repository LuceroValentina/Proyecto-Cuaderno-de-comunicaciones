import React, { useEffect, useState } from "react";

const Calendario = () => {
    const [feriados, setFeriados] = useState([]); 
    const [cargando, setCargando] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const obtenerFeriados = async () => {
            try {
                const respuesta = await fetch("https://argentinaferiados-api.vercel.app/2025");
                if (!respuesta.ok) throw new Error("Error al obtener los feriados");
                const datos = await respuesta.json();
                console.log(datos);
                setFeriados(datos); 
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        obtenerFeriados(); 
    }, []); 

    if (cargando) return <p>Cargando feriados...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
  <div style={styles.contenedor}>
    <h2 style={styles.titulo}>Calendario de Feriados 2025</h2>

    <div style={styles.calendario}>
      {Array.from({ length: 12 }, (_, i) => {
        const mes = i + 1;
        const nombreMes = new Date(2025, i).toLocaleString("es-ES", { month: "long" });

        const diasEnMes = new Date(2025, mes, 0).getDate();

        return (
          <div key={mes} style={styles.mes}>
            <h3 style={styles.nombreMes}>
              {nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)}
            </h3>
            <div style={styles.gridDias}>
              {Array.from({ length: diasEnMes }, (_, d) => {
                const dia = d + 1;
                const fechaStr = `2025-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

                const feriado = feriados.find((f) => f.fecha === fechaStr);

                return (
                  <div
                    key={dia}
                    style={{
                      ...styles.dia,
                      ...(feriado ? styles.feriadoDia : {}),
                    }}
                    title={feriado ? feriado.nombre : ""}
                  >
                    {dia}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

};

const styles = {
  contenedor: {
    padding: "20px",
    fontFamily: "Jura, sans-serif",
  },
  titulo: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
  },
  calendario: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  mes: {
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  nombreMes: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
    fontSize: "1.2rem",
  },
  gridDias: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "5px",
  },
  dia: {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    fontSize: "0.9rem",
  },
  feriadoDia: {
    backgroundColor: "#e53935",
    color: "white",
    fontWeight: "bold",
    border: "1px solid #c62828",
  },
};


export default Calendario;
