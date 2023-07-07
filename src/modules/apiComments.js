const saveComment = async (data) => {
  const apiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RfJpwLbuNZkYmafYdHPm/comments/';

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
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RfJpwLbuNZkYmafYdHPm/comments?item_id=${showId}`);
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