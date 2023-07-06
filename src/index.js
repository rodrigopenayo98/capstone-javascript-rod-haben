import "./style.css";
import "./modules/apiMovies.js";
import "./modules/apiLikes.js";
import { addCards } from "./modules/cards.js";
import { addCommentForm } from "./modules/addCommentForm.js";

window.addEventListener("load", () => {
  addCards();
  addCommentForm();
});

console.log("Hello webpack!");
