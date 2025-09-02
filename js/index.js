import { $, onDOMLoad } from "./utils/handleElem.min.js";
import loadHTML from "./utils/loadHTML.min.js";
import myAge from "./utils/myAge.min.js";

function checkAlert() {
  if (localStorage.getItem("isABClosed") == "true") {
    $("alertBar").style.display = "none";
  } else {
    $("alertBar").style.display = "flex";
  };
};

onDOMLoad(() => {
  loadHTML("alert", "/pages/alert-bar.html");
  loadHTML("header", "/pages/header.html");
  loadHTML("home", "/pages/home-section.html");
  loadHTML("experience", "/pages/experience.html");
  loadHTML("social", "/pages/social.html");
  // loadHTML("projects", "/pages/projects.html");
  loadHTML("donate", "/pages/donate.html");
  loadHTML("footer", "/pages/footer.html");
  
  setTimeout(() => {
    $("myAge").textContent = myAge("2009-07-07");
    checkAlert();
  }, 500);
});

setTimeout(() => {
  $("closeAlert").addEventListener("click", () => {
    localStorage.setItem("isABClosed", "true");
    checkAlert();
  });
}, 500);