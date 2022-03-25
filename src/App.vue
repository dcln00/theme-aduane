<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Preloader from "./components/Preloader.vue";


export default {
    name: "app",
    data() {
        return {
        };
    },
    components: { Header, Footer, Preloader },
     mounted() {
    let s = document.createElement("script");
    s.setAttribute("src", "/src/js/script.js");
    s.setAttribute('type','text/javascript')
    document.body.appendChild(s);
  }
}
</script>

<template>
  <Header />
<!-- <Preloader /> -->
    <main>
      <RouterView />
    </main>
  <Footer />
</template>

<style lang="scss">

</style>