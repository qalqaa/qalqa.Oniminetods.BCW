<script setup>
</script>

<template>
  <div class="container">
    <div class="section-stack">
      <h2 class="stack__title">{{ $t("stackTitle") }}</h2>
      <ul class="stack__list">
        <li class="stack__item">
          <img class="item-img" src="../img/HTML.svg" alt="" />
          <p class="item-title">HTML</p>
          <span class="tooltip">{{ $t("stackHtml") }}</span>
        </li>
        <li class="stack__item">
          <img class="item-img" src="../img/CSS.svg" alt="" />
          <p class="item-title">CSS/SCSS</p>
          <span class="tooltip">{{ $t("stackCss") }}</span>
        </li>
        <li class="stack__item">
          <img class="item-img" src="../img/JavaScript.svg" alt="" />
          <img class="item-img" src="../img/TypeScript.svg" alt="" />
          <p class="item-title">JS/TypeScript</p>
          <span class="tooltip">{{ $t("stackJS") }}</span>
        </li>
        <li class="stack__item">
          <img class="item-img" src="../img/Angular.svg" alt="" />
          <p class="item-title">Angular</p>
          <span class="tooltip">{{ $t("stackAngular") }}</span>
        </li>
        <li class="stack__item">
          <img class="item-img" src="../img/React.svg" alt="" />
          <p class="item-title">React</p>
          <span class="tooltip">{{ $t("stackReact") }}.</span>
        </li>
        <li class="stack__item">
          <img class="item-img" src="../img/Vue.svg" alt="" />
          <p class="item-title">VueJS</p>
          <span class="tooltip">{{ $t("stackVueJS") }}</span>
        </li>
      </ul>
      <div class="stack__descr">
        <p class="stack__descr-text">{{ $t("stackDescr") }}</p>
        <p class="stack__descr-text">{{ $t("stackProjectsTitle") }}</p>
        <ul class="descr-list">
          <li class="descr-list__item">
            {{ $t("stackSneakerShop") }}:
            <a href="https://qalqa-sneakers-shop.netlify.app/">Link</a>
            {{ $t("stackSneakerShopDescr") }}
          </li>
          <li class="descr-list__item">
            {{ $t("stackObject") }}: <a href="">Link</a>
            {{ $t("stackObjectDescr") }}
          </li>
          <li class="descr-list__item">
            {{ $t("stackObject") }}: <a href="">Link</a>
            {{ $t("stackObjectDescr") }}
          </li>
          <li class="descr-list__item">
            {{ $t("stackObject") }}: <a href="">Link</a>
            {{ $t("stackObjectDescr") }}
          </li>
          <li class="descr-list__item">
            {{ $t("stackObject") }}: <a href="">Link</a>
            {{ $t("stackObjectDescr") }}
          </li>
          <li class="descr-list__item">
            {{ $t("stackObject") }}: <a href="">Link</a>
            {{ $t("stackObjectDescr") }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3vh;
}

.stack__title {
  margin-bottom: 1.5rem;
}

.stack__list {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.item-img {
  width: 64px;
  height: 64px;
}

.stack__item {
  max-width: 136px;
  position: relative;
  text-align: center;
}

.stack__item:nth-child(2)::after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 30px;
  top: 15px;
  width: 64px;
  height: 64px;
  background-image: url("../img/Sass.svg");
  background-repeat: no-repeat;
}

.stack__item:nth-child(2) {
  z-index: 0;
}

.stack__item:nth-child(3) .item-img:first-child {
  margin-right: 8px;
}

.light .stack__item .tooltip {
  background-color: var(--vt-c-white-soft);
  box-shadow: 0 0 5px var(--vt-c-black-soft);
}

.stack__item .tooltip {
  position: absolute;
  opacity: 0;
  height: 0;
  visibility: hidden;
  width: 140px;
  background-color: var(--vt-c-black-soft);
  text-align: center;
  border-radius: 6px;
  padding: 7px;
  transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  box-shadow: 0 0 10px var(--vt-c-black);
  transform: translateY(-10px);
}

.stack__item:hover > .tooltip {
  transform: translateY(5px);
  height: auto;
  opacity: 1;
  visibility: visible;
}

.stack__item:not(:nth-child(3)) .tooltip {
  left: -50%;
}

.stack__item:nth-child(3) .tooltip {
  left: 0;
}

.item-title {
  transition: 0.3s ease-in-out;
}

.stack__item:hover > .item-title {
  color: var(--color-accent);
  text-shadow: 0 0 5px var(--color-accent);
}

.stack__descr {
  text-align: center;
}

.stack__descr-text:nth-child(2) {
  margin-bottom: 1vh;
}

.descr-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5vh;
}

@media (max-width: 768px) {
  .stack__list {
    z-index: 0;
    max-width: 350px;
    display: flex;
    flex-direction: column;
  }

  .stack__item:not(:nth-child(3)) .tooltip {
    left: 0;
    z-index: 2;
  }

  .stack__item:nth-child(1) {
    z-index: 6;
  }

  .stack__item:nth-child(2) {
    z-index: 5;
  }

  .stack__item:nth-child(3) {
    z-index: 4;
  }

  .stack__item:nth-child(4) {
    z-index: 3;
  }

  .stack__item:nth-child(5) {
    z-index: 2;
  }

  .stack__item:nth-child(6) {
    z-index: 1;
  }

  .stack__item .tooltip {
    left: 0%;
    z-index: 1001;
  }
}
</style>

<script setup></script>