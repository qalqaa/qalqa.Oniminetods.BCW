<script setup>
import { RouterLink, RouterView } from "vue-router";
import About from "./components/About.vue"
import Stack from "./components/Stack.vue"
import Contacts from "./components/Contacts.vue"
import Feature from './components/Feature.vue';

import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const changeLocale = (newLocale) => {
  locale.value = newLocale;
};

</script>
<template>
  <header id="header">
    <div id="header_sm">
      <div class="menu">
        <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
        <label for="burger-checkbox" class="burger"></label>

        <ul class="menu-list">
          <h1 class="logo_sm">q<i class="bi bi-braces "></i>qa</h1>
          <li><a href="#about" class="menu-item">{{ $t('headerAbout') }}</a></li>
          <li><a href="#stack" class="menu-item">{{ $t('headerStack') }}</a></li>
          <li><a href="#contacts" class="menu-item">{{ $t('headerContacts') }}</a></li>
          <!-- <li><a href="#feature" class="menu-item">{{ $t('headerFeature') }}</a></li> -->
          <li><a href="#footer" class="menu-item">{{ $t('headerFooter') }}</a></li>
          <div style="display: flex; gap: 20px">
            <label class="switch">
              <input id="theme-toggle_sm" type="checkbox">
              <span class="slider round"></span>
            </label>
            <!-- <div class="translate">
              <i id="translate__icon" class="bi bi-translate"></i>
              <ul class="translate__list">
                <li @click="changeLocale('en')" class="translate__item">
                  <input class="radio" id="eng" type="radio" name="language" value="English" checked>
                  <label class="translate__label" for="eng">English</label>
                </li>
                <li @click="changeLocale('ru')" class="translate__item">
                  <input class="radio" id="rus" type="radio" name="language" value="Русский">
                  <label class="translate__label" for="rus">Руссккий</label>
                </li>
              </ul>
            </div> -->
          </div>
        </ul>
      </div>
    </div>

    <div class="header_md">
      <div class="container">
        <nav>
          <h1 class="logo">q<i class="bi bi-braces "></i>qa</h1>
          <ul class="header__nav-list">
            <li><a href="#about">{{ $t('headerAbout') }}</a></li>
            <li><a href="#stack">{{ $t('headerStack') }}</a></li>
            <li><a href="#contacts">{{ $t('headerContacts') }}</a></li>
            <!-- <li><a href="#feature">{{ $t('headerFeature') }}</a></li> -->
            <li><a href="#footer">{{ $t('headerFooter') }}</a></li>
          </ul>
          <div>
            <div class="translate">
              <i id="translate__icon" class="bi bi-translate"></i>
              <ul class="translate__list">
                <li @click="changeLocale('en')" class="translate__item">
                  <input class="radio" id="eng" type="radio" name="language" value="English" checked>
                  <label class="translate__label" for="eng">English</label>
                </li>
                <li @click="changeLocale('ru')" class="translate__item">
                  <input class="radio" id="rus" type="radio" name="language" value="Русский">
                  <label class="translate__label" for="rus">Руссккий</label>
                </li>
              </ul>
            </div>
            <label class="switch">
              <input id="theme-toggle" type="checkbox">
              <span class="slider round"></span>
            </label>
          </div>
        </nav>
      </div>
    </div>

  </header>

  <body>
    <div id="about">
      <About />
    </div>

    <div id="stack">
      <Stack />
    </div>

    <div id="contacts">
      <Contacts />
    </div>
    <!-- <div id="feature">
      <Feature />
    </div> -->
  </body>
  <footer id="footer">
    <div class="container">
      <nav>
        <ul class="footer__nav-list">
          <li><a href="#about">{{ $t('headerAbout') }}</a></li>
          <li><a href="#stack">{{ $t('headerStack') }}</a></li>
          <li><a href="#contacts">{{ $t('headerContacts') }}</a></li>
          <!-- <li><a href="#feature">{{ $t('headerFeature') }}</a></li> -->
          <li><a href="#header">{{ $t('footerHeader') }}</a></li>
          <li> <a href="">{{ $t('footerSecretLink') }}</a></li>
        </ul>
      </nav>
    </div>
  </footer>
  <RouterView />
</template>

<style scoped>
#header_sm {
  display: none;
}

#header {
  transition: 0.3s background-color ease-in-out;
  margin-bottom: 4vh;
  padding: 1.2rem 1rem;
  text-align: center;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.light header,
.light footer {
  background-color: var(--vt-c-white-mute);
}

.dark header,
.dark footer {
  background-color: var(--vt-c-black-soft);
}

nav {
  display: flex;
  justify-content: space-between;
}

.logo {
  font-size: 20px;
  width: 8%;
}

.header__nav-list {
  width: 32%;
  justify-content: space-between;
  display: flex;
}

.footer__nav-list {
  width: 100%;
  justify-content: space-between;
  display: flex;
}

.translate {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

#translate__icon {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.translate__list {

  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  left: -30px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  height: auto;
  visibility: hidden;
  transform: translateY(-10px);
}

.dark .translate__list {
  background-color: var(--vt-c-black-mute);
}

.light .translate__list {
  box-shadow: 0 0 5px var(--vt-c-black-soft);
  background-color: var(--vt-c-white-mute);
}

.active__list {
  transform: translateY(5px);
  opacity: 1;
  visibility: visible;
}

.translate__item__selected {
  color: var(--color-accent)
}

.translate__label {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.radio {
  width: 0
}

.radio:checked+.translate__label {
  color: var(--color-accent);
  text-shadow: 0 0 10px var(--color-accent);
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
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: url('./img/moon.svg');
  background-size: 50%;
  position: absolute;
  content: "";
  height: 21px;
  width: 21px;
  left: 3.3px;
  bottom: 2.5px;
  background-color: var(--vt-c-black-mute);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: var(--color-accent);
}

input:checked+.slider::before {
  background-image: url('./img/sun.svg');
  background-color: var(--vt-c-white)
}

input:checked+.slider {
  box-shadow: 0 0 5px var(--color-accent);
}

input:checked+.slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

footer {
  padding: 1.2rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

@media (max-width:992px) {
  #header {
    padding: 0;
    background: transparent;
    box-shadow: 0 0 0;
  }

  .header_md {
    display: none;
  }

  #header_sm {
    position: fixed;
    display: block;
    z-index: 1001;
  }

  .logo_sm {
    text-align: center;
    padding-left: 20px;
  }

  .burger-checkbox {
    position: absolute;
    visibility: hidden;
  }

  .burger {
    position: relative;
    z-index: 5;
    cursor: pointer;
    display: block;
    position: relative;
    border: none;
    background: transparent;
    width: 30px;
    height: 25px;
    left: 15px;
    top: -10px
  }

  .burger::before,
  .burger::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background: var(--vt-c-white-mute);
  }

  .light .burger::before,
  .light .burger::after {
    background: var(--vt-c-black-mute)
  }

  .burger::before {
    top: 0;
    box-shadow: 0 11px 0 var(--vt-c-white-mute);
    transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
  }

  .light .burger::before {
    box-shadow: 0 11px 0 var(--vt-c-black-mute);
  }

  .burger::after {
    bottom: 0;
    transition: bottom .3s .15s, transform .3s;
  }

  .burger-checkbox:checked+.burger::before {
    top: 11px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
    transition: box-shadow .15s, top .3s, transform .3s .15s;
  }

  .burger-checkbox:checked+.burger::after {
    bottom: 10px;
    transform: rotate(-45deg);
    transition: bottom .3s, transform .3s .15s;
  }

  .menu {
    width: 0;
  }

  .menu-list {
    top: -36px;
    left: 0;
    position: absolute;
    display: grid;
    gap: 12px;
    padding-top: 10px;
    padding-bottom: 20px;
    margin: 0;
    background: var(--vt-c-black-soft);
    list-style-type: none;
    transform: translateX(-100%);
    transition: .3s;
    width: 180px;
    border-radius: 0px 10px 10px 0px;
    justify-items: center;
  }

  .light .menu-list {
    background: var(--vt-c-white-mute);
    box-shadow: 0 0 20px var(--vt-c-black-mute);
  }

  .menu-item {
    display: block;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
  }

  .menu-item:hover {
    background: rgba(255, 255, 255, .2)
  }

  .burger-checkbox:checked~.menu-list {
    transform: translateX(0);
  }
}
</style>
