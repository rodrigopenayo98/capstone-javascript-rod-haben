const api2 = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`;
const idApi = `sw2vuEkeUbDCeej2fRN3`
const arrayLikes = [];

const getLikes = async () => {
  const response = await fetch(`${api2}apps/${idApi}/likes/`);
  const data = await response.json();
  arrayLikes = data;
};

const getArrayLikes = () => arrayLikes;
export { getLikes , getArrayLikes }

