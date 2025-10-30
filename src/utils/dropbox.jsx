import { Dropbox } from "dropbox";

const dbx = new Dropbox({
  accessToken: process.env.REACT_APP_DROPBOX_TOKEN,
  fetch, // usa el fetch del navegador
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
