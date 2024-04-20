<template>
    <div class="container">
        <div class="section-hero">
            <h2 class="hero__title">About</h2>
            <div class="hero__image-container">
                <!-- TODO: СДЕЛАТЬ ЭФЕКТ НА КАРТИНКЕ КАК НА САЙТЕ С ДЕРЕВЬЯМИ -->
                <img class="hero__image" src="../img/qalqaAva.jpg" alt="2123">
            </div>
            <h2>qalqa / Андрей</h2>
            <p class="hero__descr">Frontend Developer</p>
            <p class="hero__about">About myself:
                I've been working for an IT (SoftwareOne) company for a year now. During this time,
                I improved both my
                hard and soft skills, and also learned the basics of working practice. And for me this is just the
                beginning of the journey. I've a main goal to become a full
                stack developer and I'm moving towards this day after day!</p>
        </div>
    </div>
</template>

<style scoped>

.section-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3vh;
}

.hero__title {
    color: var(--color-accent);
    font-size: 30px;
    margin-bottom: 1.5rem;
}

.hero__descr {
    margin-bottom: 1rem;
}

.hero__about {
    max-width: 500px;
}

.hero__image-container {
    margin-bottom: 1rem;
    overflow: hidden;
    width: 500px;
    height: 500px;
    border-radius: 15px;
    box-shadow: 0px 0 10px rgb(0, 0, 0);
}

.hero__image {
    width: 500px;
}
</style>

<script setup>
</script>
