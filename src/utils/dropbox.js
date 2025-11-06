const TOKEN = process.env.REACT_APP_DROPBOX_TOKEN;

if (!TOKEN) {
    console.error("No se encontró REACT_APP_DROPBOX_TOKEN en el .env");
}

export const subirArchivo = async(blob, nombreArchivo) => {
    const url = "https://content.dropboxapi.com/2/files/upload";
    const headers = {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/octet-stream",
        "Dropbox-API-Arg": JSON.stringify({
            path: `/firmas/${nombreArchivo}`,
            mode: "add",
            autorename: true,
            mute: false,
        }),
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers,
            body: blob,
        });

        const textResponse = await response.text();
        console.log("Respuesta cruda de Dropbox:", textResponse);

        if (!response.ok) {
            throw new Error("Error al subir el archivo: " + textResponse);
        }

        const data = JSON.parse(textResponse);
        return data;
    } catch (error) {
        console.error("Error al subir archivo:", error);
        throw error;
    }
};