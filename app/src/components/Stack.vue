<template>
    <div class="container">
        <div class="section-stack">
            <h2 class="stack__title">My Stack</h2>
            <ul class="stack__list">
                <li class="stack__item">
                    <img class="item-img" src="../img/HTML.svg" alt="">
                    <h2 class="item-title">HTML</h2>
                </li>
                <li class="stack__item">
                    <img class="item-img" src="../img/CSS.svg" alt="">
                    <h2 class="item-title">CSS, SCSS</h2>
                </li>
                <li class="stack__item">
                    <img class="item-img" src="../img/JavaScript.svg" alt="">
                    <h2 class="item-title">JS, TypeScript</h2>
                </li>
                <li class="stack__item">
                    <img class="item-img" src="../img/Angular.svg" alt="">
                    <h2 class="item-title">Angular</h2>
                </li>
                <li class="stack__item">
                    <img class="item-img" src="../img/React.svg" alt="">
                    <h2 class="item-title">React</h2>
                </li>
                <li class="stack__item">
                    <img class="item-img" src="../img/Vue.svg" alt="">
                    <h2 class="item-title">VueJS</h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.section-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stack__title {
    color: var(--color-accent);
    font-size: 30px;
    margin-bottom: 1.5rem;
}

.stack__list {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.item-img {
    width: 64px;
    height: 64px;
}

.stack__item:nth-child(2)::after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 35px;
    top: 15px;
    width: 64px;
    height: 64px;
    background-image: url('../img/Sass.svg');
    background-repeat: no-repeat;
}

.stack__item:nth-child(2) {
    z-index: 0;
    position: relative;
}

.stack__item:nth-child(3)::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 70px;
    top: 0px;
    width: 64px;
    height: 64px;
    background-size: contain;
    background-image: url('../img/Typescript.svg');
    background-repeat: no-repeat;
}

.stack__item:nth-child(3) {
    position: relative;
    z-index: 2;

}

</style>

<script setup></script>