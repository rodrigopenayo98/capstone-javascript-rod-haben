import { getSeries } from "./apiMovies";
import {openPopUpWindow} from './utils';
import {getAllLikes} from './apiLikes';

const d = document;
const cardsContainer = d.querySelector("#movies-container");

const addCards = async () => {
  try {
    const infoSeries = await getSeries();
    const allLikes = await getAllLikes();

    let cardCounter = 1;

    infoSeries.forEach((series) => {
     
      const seriesLikes = allLikes.find((like) => like.item_id== series.id);
      const cardStructure = d.createElement("div");
      cardStructure.classList.add("card-movie");
      cardStructure.id = `card-${cardCounter}`;

      cardStructure.innerHTML = `
        <img src="${series.image}" alt="">
        <div class="cc1">
          <h4 class="card-title">${series.name}</h4>
          <div class="cc1-1">
            <i class="fas fa-heart"></i>
            <p>${seriesLikes? seriesLikes.likes : 0} likes</p>
          </div>
        </div>
        <div class="cc2">
          <button>Comments</button>
        </div>
      `;
      cardsContainer.setAttribute('data-id',series.id);
      cardsContainer.appendChild(cardStructure);
      cardStructure.addEventListener('click',($e) => openPopUpWindow(series.id))
      cardCounter++;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export { addCards };
