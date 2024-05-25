<template>
    <div class="container">
        <div class="section-hero">
            <h2 class="hero__title">{{ $t('aboutTitle') }}</h2>
            <div class="hero__image-container">
                <!-- TODO: СДЕЛАТЬ ЭФЕКТ НА КАРТИНКЕ КАК НА САЙТЕ С ДЕРЕВЬЯМИ -->
                <img class="hero__image" src="../img/qalqaAva.jpg" alt="2123">
            </div>
            <h2>{{ $t('aboutName') }}</h2>
            <p class="hero__descr">{{ $t('aboutDescr') }}</p>
            <p class="hero__about">{{ $t('aboutAbout') }}</p>
        </div>
    </div>
</template>

<style scoped>
.section-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3vh;
    background: radial-gradient(var(--color-accent-mute)0%, transparent 50%);
}

.light .section-hero {
    background: 0;
}

.hero__title {
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

@media (max-width: 768px) {
    .hero__image-container {
        width: 350px;
        height: 350px;
    }

    .hero__image {
        width: 350px;
    }

    .hero__about {
        max-width: 350px;
    }
}
</style>

<script setup>
</script>
