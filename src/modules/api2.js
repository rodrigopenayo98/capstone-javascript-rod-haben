const api2 = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`;
const idApi = `sw2vuEkeUbDCeej2fRN3`
const arrayLikes = [];

const getLikes = async () => {
  const response = await fetch(`${api2}apps/${idApi}/likes/`);
  console.log(response);
  const data = await response.json();
  arrayLikes = data;
};

getLikes()

const getArrayItems = () => arrayLikes;


const itemIds = [
  {
      "item_id": 'ST',
      "likes": 17
  },
  {
      "item_id": '13RW',
      "likes": 20
  },
  {
      "item_id": "EUPH",
      "likes": 10
  },
  {
      "item_id": 'DUNE',
      "likes": 9
  },
  {
      "item_id": 'GOT',
      "likes": 22
  },
  {
      "item_id": 'TWD',
      "likes": 11
  }
]


const updateLikes = async () => {
  await fetch(`${api2}apps/${idApi}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemIds[]),
  });
};






