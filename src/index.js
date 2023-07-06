import "./style.css";
import "./modules/apiMovies.js";
import "./modules/apiLikes.js";
import { addCards } from "./modules/cards.js";
// import { addCommentForm } from "./modules/addCommentForm.js";
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

modalClose.addEventListener('click',($e) => {
    modal.classList.remove('show');
    modal.classList.add('hide');
})
window.addEventListener("load", () => {
  addCards();
  // addCommentForm();
});

console.log("Hello webpack!");
