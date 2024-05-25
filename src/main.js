import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

const app = createApp(App);

app.use(router);

app.use(i18n);
app.mount("#app");

// window.addEventListener("scroll", function () {
//   let scrolled = window.scrollY;
//   const threshold = 200; // Порог прокрутки, после которого будет изменен фон
//   const body = this.document.body;

//   if (scrolled > threshold) {
//     console.log("changed");

//     body.classList.add("background-stack");
//     body.classList.remove("background-main");
//   } else {
//     console.log("removed");

//     body.classList.add("background-main");
//     body.classList.remove("background-stack");
//   }
// });

const themeToggle = document.getElementById("theme-toggle");
const themeToggleSm = document.getElementById("theme-toggle_sm");
// themeEnum = { dark: 0, light: 1 }

const body = document.body;

themeToggle.addEventListener("change", function () {
  const themeOutput = ["dark", "light"];
  if (this.checked) {
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
});

themeToggleSm.addEventListener("change", function () {
  const themeOutput = ["dark", "light"];
  if (this.checked) {
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
});

const translate = document.querySelector(".translate");
const translateIcon = document.getElementById("translate__icon");
const translateList = document.querySelector(".translate__list");

translate.addEventListener("click", translateToggle);

let isListActive = false;

function translateToggle() {
  if (isListActive) {
    translateIcon.style.color = "";
    translateList.classList.remove("active__list");
    isListActive = false;
  } else {
    translateIcon.style.color = "var(--color-accent)";
    translateList.classList.add("active__list");
    isListActive = true;
  }
}
