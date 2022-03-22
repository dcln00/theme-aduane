<script>
export default {
    props: ['firstline','secondline'],
}
</script>

<template>
    <section id="head" class="container-fluid /bg-primary d-flex justify-content-center align-items-center">
            <div class="head-items">
            <span class="brand-text">Aduane</span> <br>
            <span class="page-desc">{{firstline}} <br> {{secondline}} </span>
            </div>
        </section>
</template>

<style lang="scss">
    @import './src/scss/layout/head-section';
</style>