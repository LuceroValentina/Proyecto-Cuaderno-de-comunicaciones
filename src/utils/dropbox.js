import { Dropbox } from "dropbox";

const dbx = new Dropbox({
  accessToken: process.env.REACT_APP_DROPBOX_TOKEN,
});

export const subirArchivo = async (archivo, nombreArchivo, carpeta = "/") => {
  try {
    // Subir archivo
    await dbx.filesUpload({
      path: `${carpeta}${nombreArchivo}`,
      contents: archivo,
      mode: { ".tag": "add" },
    });

    // Crear link compartido
    const link = await dbx.sharingCreateSharedLinkWithSettings({
      path: `${carpeta}${nombreArchivo}`,
      settings: { requested_visibility: "public" },
    });

    // Modificar link para que sea directamente la imagen
    const urlPublica = link.url.replace("?dl=0", "?raw=1"); 
    return urlPublica;

  } catch (error) {
    console.error("Error subiendo a Dropbox:", error);
    throw error;
  }
};
