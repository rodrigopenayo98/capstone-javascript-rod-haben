import { getSeries } from "./api";

const d = document;
const cardsContainer = d.querySelector("#movies-container");

const addDummyCards = async () => {
  try {
    const infoSeries = await getSeries();
    infoSeries.forEach((series) => {
      const cardStructure = d.createElement("div");
      cardStructure.classList.add("card-movie");

      cardStructure.innerHTML = `
        <img src="${series.image}" alt="">
        <div class="cc1">
             <h4 class="card-title">${series.name}</h4>
          <div class="cc1-1">
             <i class="fas fa-heart"></i>
             <p>5 likes</p>
          </div>
        </div>
        <div class="cc2">
          <button>Comments</button>
          <button>Reservations</button>
        </div>
      `;
      cardsContainer.appendChild(cardStructure);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export { addDummyCards };
