import { API_BASE_URL, APP_ID } from './constants.js';

const apiComment = `${API_BASE_URL}apps/${APP_ID}/comments`;

const saveComment = async (data) => {
  try {
    const response = await fetch(apiComment, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Comentario enviado exitosamente');
    }
  } catch (error) {
    console.log('Error en la solicitud:', error);
  }
};

const fetchShowComments = async (showId) => {
  try {
    const response = await fetch(`${apiComment}?item_id=${showId}`);
    const data = await response.json();
    return data.length ? data : [];
  } catch (err) {
    return [];
  }
};

export {
  saveComment,
  fetchShowComments,
};