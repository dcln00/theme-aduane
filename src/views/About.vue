<script>
import AboutDescription from "../components/AboutDescription.vue";
import ChefSection from "../components/ChefSection.vue";
import AboutHero from "../components/AboutHero.vue";
import HeadSection from "../components/HeadSection.vue";
import BackgroundWrapper from "../components/BackgroundWrapper.vue";

export default {
    components: { AboutDescription, ChefSection, AboutHero, HeadSection, BackgroundWrapper },
    data () {
        return {
            firstline: 'Our Story',
            secondline: '',
            style: 'object-position:top;',
        }
    }
}
</script>

<template>
<BackgroundWrapper>
    <img src="@/assets/images/image6.jpg" :style="style">
</BackgroundWrapper>
  <HeadSection :firstline="firstline" />
  <AboutDescription />
  <ChefSection />
  <AboutHero />
</template>

<style lang="scss">
    @import '@/scss/pages/about-page';
</style>