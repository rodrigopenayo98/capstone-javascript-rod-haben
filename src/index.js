import "./style.css";
import "./modules/api.js";
import "./modules/api2.js";
import { addCards } from "./modules/cards.js";
import { addCommentDiv } from "./modules/addComment.js"


window.addEventListener("load", () => {
  addCards();
  addCommentDiv();
});

console.log("Hello webpack!");