import { Dropbox } from "dropbox";

const dbx = new Dropbox({
  accessToken:  process.env.REACT_APP_DROPBOX_TOKEN,
  fetch: fetch,
});


export const uploadFile = async (file) => {
  try {
    const response = await dbx.filesUpload({
      path: `/${file.name}`,
      contents: file,
    });
    return response;
  } catch (error) {
    console.error("Error subiendo archivo:", error);
    throw error;
  }
};

export const getFiles = async () => {
  try {
    const response = await dbx.filesListFolder({ path: "" });
    return response.result.entries;
  } catch (error) {
    console.error("Error obteniendo archivos:", error);
    throw error;
  }
};

export default dbx;
