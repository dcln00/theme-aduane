<script>
import HeadSection from "../components/HeadSection.vue";
import BackgroundWrapper from "../components/BackgroundWrapper.vue";
import EventsCarousel from "../components/EventsCarousel.vue";
export default {
    components: { HeadSection, BackgroundWrapper, EventsCarousel },
    data () {
        return {
            firstline:'Thee events',
            secondline:'to dine for',
            style: 'object-position:top;',
        }
    }
}
</script>

<template>
    <BackgroundWrapper>
        <img src="@/assets/images/image17.jpg" :style="style">
    </BackgroundWrapper>
  <HeadSection :firstline='firstline' :secondline='secondline'/>
  <EventsCarousel />
</template>

<style>

</style>