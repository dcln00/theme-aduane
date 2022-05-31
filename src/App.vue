<script>
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
<Preloader />
  <Header />
    <main>
      <router-view v-slot="{Component, route}">
        <transition name="fade" mode="out-in" appear>
          <div :key="route.name">
          <component :is="Component"/>
          </div>
        </transition>
      </router-view>
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

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from, .fade-leave-to {
  transform: scale(0.9,0.9);
  opacity: 0;
}
</style>