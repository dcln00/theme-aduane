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
    s.setAttribute("src", "https://cdn.jsdelivr.net/gh/dcln00/theme-aduane/src/js/script.js");
    s.setAttribute('type','text/javascript');
    document.body.appendChild(s);
  }
}
</script>

<template>
  <Header />
  <Preloader />
    <main>
      <RouterView />
    </main>
  <Footer />
</template>

<style lang="scss">
i {
    transition-property:color, transform;
    transition: 0.5s;
}

i:hover {
    color: $sec-color;
    transform: scale(0.9,0.9);
}
</style>