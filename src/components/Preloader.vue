<template>
    <div id="preloader" class="">
        <div class="container">
       <lottie-animation
        :animationData="animationJSON"
        :loop="false"
        :speed="1"
        @complete="complete"
      />
    </div>
    </div>
</template>

<script>
import animationJSON from "/src/assets/data.json";

export default {
    components: {animationJSON},
    data() {
        return {
            animationJSON,
        }
    },
    methods: {
        complete() {
            let loader = document.getElementById('preloader');
            loader.classList.add("remove-preload");
        }
    }
}

</script>

<style lang="scss">
@import '@/scss/components/_preloader.scss';
</style>