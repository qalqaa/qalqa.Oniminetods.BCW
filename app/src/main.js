import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// window.addEventListener("scroll", function () {
//   let scrolled = window.scrollY;
//   const threshold = 400; // Порог прокрутки, после которого будет изменен фон
//   const body = this.document.body;

//   if (scrolled > threshold) {
//     console.log("changed");
//     body.classList.add("background-stack");
//   } else {
//     console.log("removed");
//     body.classList.remove("background-stack");
//   }
// });
