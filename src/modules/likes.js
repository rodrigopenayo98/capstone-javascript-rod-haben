import { getLikes , getArrayLikes } from './api2.js';
const api2 = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`;
const idApi = `sw2vuEkeUbDCeej2fRN3`

const itemIds = ['ST', '13RW', 'EUPH', 'DUNE', 'GOT', 'TWD'];
const updateLikes = async (id) => {
  const object = {
    item_id: `${itemIds[id]}`,
  };
  await fetch(`${api2}apps/${idApi}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  });
};

// const likes = () => {
//   const buttons = Array.from(document.getElementsByClassName('card-icon'));
//   buttons.forEach((button, i) => {
//     button.addEventListener('click', async () => {
//       button.classList.add('liked');
//       await updateLikes(i);
//       await getLikes();
//       button.classList.remove('liked');
//       const items = getArrayItems();
//       const likesP = Array.from(document.getElementsByClassName('likes'));
//       likesP[i].innerHTML = `${items[i].likes} Likes`;
//     });
//   });
// };

// export { updateLikes, likes };