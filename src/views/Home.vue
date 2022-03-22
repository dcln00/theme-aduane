<script>
import Discover from "@/components/Discover.vue"; 
import HeadSection from "@/components/HeadSection.vue";
import MenuSection from "@/components/MenuSection.vue";
import Events from "@/components/Events.vue";
import Reservations from "@/components/Reservations.vue";
import BackgroundWrapper from "../components/BackgroundWrapper.vue";

export default {
components: { Discover, HeadSection, MenuSection, Events, Reservations, BackgroundWrapper },
data () {
    return {
        firstline:'A Contemporary',
        secondline:'Dining experience',
        style: 'object-position:top;'
    }
}
}
</script>

<template>
    <BackgroundWrapper>
        <img src="@/assets/images/image5.jpg" :style="style">
    </BackgroundWrapper>
    <HeadSection :firstline="firstline" :secondline="secondline" />
    <Discover />
    <MenuSection />
    <Events />
    <Reservations />
</template>