import { API_BASE_URL, APP_ID } from './constants.js';

const getAllLikes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/`);
    const data = await response.json();
    return data;
  } catch (err) {
    return [];
  }
};
const getSeriesLikes = async (showId) => {
  try {
    const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/?item_id=${showId}`);
    const data = response.json();
    return data.length ? data[0].likes : 0;
  } catch (err) {
    return 0;
  }
};

const likeSeries = async (showId) => {
  try {
    await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: showId }),
    });
    return {
      error: false,
    };
  } catch (error) {
    return { error: true };
  }
};
export {
  getSeriesLikes,
  getAllLikes,
  likeSeries,
};
