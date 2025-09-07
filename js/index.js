import { $, onDOMLoad } from "./utils/handleElem.min.js";
import loadHTML from "./utils/loadHTML.min.js";
import myAge from "./utils/myAge.min.js";
import randomOst from "./randomOst.min.js";
import { default as renderProjects } from "./projects.min.js";

onDOMLoad(() => {
  loadHTML("header", "/pages/header.html");
  loadHTML("home", "/pages/home-section.html").then(() => {
    $("myAge").textContent = myAge("2009-07-07");
  });
  loadHTML("experience", "/pages/experience.html");
  loadHTML("social", "/pages/social.html");
  loadHTML("projects", "/pages/projects.html").then(() => {
    renderProjects();
  });
  loadHTML("donate", "/pages/donate.html");
  loadHTML("soundtrack", "/pages/random-ost.html").then(() => {
    randomOst();
  });
  loadHTML("footer", "/pages/footer.html");
});