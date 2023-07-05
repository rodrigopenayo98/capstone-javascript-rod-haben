import "./style.css";
import "./modules/api.js";
import "./modules/api2.js";
import { addDummyCards } from "./modules/dummyCards.js";


window.addEventListener("load", addDummyCards);

console.log("Hello webpack!");