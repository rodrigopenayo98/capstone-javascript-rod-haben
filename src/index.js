import './style.css';
import './modules/apiMovies.js';
import './modules/apiLikes.js';
import { loadMovies } from './modules/cards.js';

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.classList.add('hide');
});
window.addEventListener('load', () => {
  loadMovies();
});
