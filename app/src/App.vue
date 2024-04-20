<script setup>
import { RouterLink, RouterView } from "vue-router";
import About from "./components/About.vue"
import Stack from "./components/Stack.vue"
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <p class="logo">[LOGO]</p>
        <ul class="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="">Stack</a></li>
          <li><a href="">Contacts</a></li>
          <li><a href="">Footer</a></li>
        </ul>
        <!-- TODO сделать понятно что это кнопка для темы -->
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </nav>
    </div>
  </header>

  <body>
    <About id="about" />
    <Stack />
  </body>
  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 4vh;
  background-color: var(--vt-c-black-soft);
  padding: 1.2rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

nav {
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 6%;
}

.nav-list {
  width: 24%;
  justify-content: space-between;
  display: flex;
}

.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-background);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 21px;
  width: 21px;
  left: 3.3px;
  bottom: 2.5px;
  background-color: var(--vt-c-white);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: var(--color-accent);
}

input:checked+.slider {
  box-shadow: 0 0 5px var(--color-accent);
}

input:checked+.slider:before {
  -webkit-transform: translateX(19.5px);
  -ms-transform: translateX(19.5x);
  transform: translateX(19.5px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
