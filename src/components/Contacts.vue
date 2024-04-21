<script setup>
</script>

<template>
    <div class="container">
        <div class="section-contacts">
            <h2 class="contacts__title">Contacts</h2>
            <ul class="contacts-list">
                <li class="contact-list__item">
                    <a href="https://t.me/qalqaa" class="item-btn"><i class="bi bi-telegram"></i> @qalqaa</a>
                </li>
                <li class="contact-list__item">
                    <a href="https://discordapp.com/chanels/292286699445420033" class="item-btn"><i
                            class="bi bi-discord"></i> qalqa</a>
                </li>
                <li class="contact-list__item">
                    <a href="https://github.com/qalqaa" class="item-btn"><i class="bi bi-github"></i>
                        qalqaa</a>
                </li>
                <li class="contact-list__item">
                    <a class="item-btn"><i class="bi bi-telephone-fill"></i>
                        +79779928861</a>
                </li>
                <li class="contact-list__item">
                    <a href="mailto:andreybas04@gmail.com" class="item-btn"><i class="bi bi-envelope-at-fill"></i>
                        andreybas04@gmail.com</a>
                </li>
                <li class="contact-list__item">
                    <a href="mailto:andrey.bastun@awara-it.com" class="item-btn"><i class="bi bi-microsoft-teams"></i>
                        andrey.bastun@awara-it.com</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css");

.section-contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3vh;
}

.contacts__title {
    margin-bottom: 1.5rem;
}

.contacts-list {
    margin-left: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5vh;


}

@media (max-width: 768px) {
    .contacts-list {
        margin-left: 0px;
        grid-template-columns: repeat(1, 1fr);
    }  
}
</style>