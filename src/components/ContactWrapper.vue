<template>
  <div class="contact-wrapper">
                <slot></slot>
    </div>
</template>

<style lang="scss">
    .contact-wrapper {
     height: 100vh;
     width: 100vw;
     position: absolute;
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

 .contact-wrapper:before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-image: linear-gradient(175deg, #0000, $dark-color 70%);
    opacity: 1;
    z-index:1;
 }
</style>