import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

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
