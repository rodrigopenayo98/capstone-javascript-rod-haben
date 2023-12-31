import { getSeries } from './apiMovies.js';
import { openPopUpWindow, countNumberOfShows } from './utils.js';
import { getAllLikes, likeSeries } from './apiLikes.js';

const d = document;
const cardsContainer = d.querySelector('#movies-container');
const counterContainer = document.getElementById('numberOfItems');

const loadMovies = async () => {
  try {
    const infoSeries = await getSeries();
    const allLikes = await getAllLikes();

    let cardCounter = 1;
    cardsContainer.innerHTML = '';

    infoSeries.forEach((series) => {
      const seriesLikes = allLikes.find((like) => like.item_id === series.id);
      const cardStructure = d.createElement('div');
      cardStructure.classList.add('card-movie');
      cardStructure.id = `card-${cardCounter}`;

      const showImage = document.createElement('img');
      showImage.setAttribute('src', series.image);
      showImage.addEventListener('click', () => openPopUpWindow(series.id));

      const infoContainer = document.createElement('div');
      infoContainer.classList.add('cc1');

      const cardTitle = document.createElement('h4');
      cardTitle.classList.add('card-title');
      cardTitle.innerText = series.name;

      const likeInfoContainer = document.createElement('div');
      likeInfoContainer.classList.add('cc1-1');
      const heartIcon = document.createElement('i');
      heartIcon.classList.add('fas', 'fa-heart');
      heartIcon.addEventListener('click', async () => {
        const { error } = await likeSeries(series.id);
        if (error) return;
        await loadMovies();
      });
      const likeInfo = document.createElement('p');
      likeInfo.innerText = `${seriesLikes ? seriesLikes.likes : 0} likes`;
      likeInfoContainer.appendChild(heartIcon);
      likeInfoContainer.appendChild(likeInfo);

      infoContainer.appendChild(cardTitle);
      infoContainer.appendChild(likeInfoContainer);

      const cardFooter = document.createElement('div');
      cardFooter.classList.add('cc2');
      const commentBtn = document.createElement('button');
      commentBtn.innerText = 'Comment';
      commentBtn.addEventListener('click', () => openPopUpWindow(series.id));
      cardFooter.appendChild(commentBtn);

      cardStructure.appendChild(showImage);
      cardStructure.appendChild(infoContainer);
      cardStructure.appendChild(cardFooter);

      cardsContainer.appendChild(cardStructure);
      cardCounter += 1;
    });
    countNumberOfShows(counterContainer, infoSeries);
  } catch (error) {
    console.error('Error:', error);
  }
};

export { loadMovies };
