<script>
export default {

}
</script>

<template>
  <div class="background-wrapper">
        <slot></slot>
  </div>
</template>


<style lang="scss">
 .background-wrapper {
     height: 100vh;
     width: 100vw;
     position: fixed;
     top: 0;
     left: 0;
     z-index: -1;
     overflow: hidden;

     img {
         object-fit: cover;
         width: 100%;
         height: 100%;
     }
 }

 .background-wrapper:before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.5;
    z-index:1;
 }
</style>