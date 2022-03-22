<script>
import NavHamburger from "./NavHamburger.vue";

export default {
    data() {
        return {
            title: "Aduane"
        };
    },
    components: { NavHamburger }
}
</script>

<template>
    <header class="container-fluid">
        <nav class="container navbar">
            <a class="navbar-brand" href="#">{{title}}</a>
            <button class="hamburger hamburger--spin" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
        </nav>
    </header>
        <NavHamburger />
</template>

<style lang="scss">
@import 'hamburgers/_sass/hamburgers/hamburgers';
@import './src/scss/layout/header';
@import './src/scss/components/mobile-menu';

</style>