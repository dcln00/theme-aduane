<script>
import HeadSection from "@/components/HeadSection.vue";
import MenuItems from '@/components/MenuItems.vue';
import MenuGallery from '@/components/MenuGallery.vue';
import BackgroundWrapper from "../components/BackgroundWrapper.vue";

export default {
    components: { HeadSection, MenuItems, MenuGallery, BackgroundWrapper },
    data() {
        return {
            firstline:'Fine Crafted Meals',
            secondline:'Made to Satisfy',
        }
    }
}
</script>

<template>
    <BackgroundWrapper>
        <img src="@/assets/images/image7.jpg" :style="style">
    </BackgroundWrapper>
    <HeadSection :firstline="firstline" :secondline="secondline" />
    <MenuItems />
    <MenuGallery />
</template>

<style lang="scss">
    @import '@/scss/pages/menu-page';
</style>