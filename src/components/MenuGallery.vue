<template>
    <section id="menu-gallery" class="container">
    <swiper
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
    >
    <swiper-slide><img src='@/assets/images/image16.jpg'></swiper-slide>
    <swiper-slide><img src='@/assets/images/image14.jpg'></swiper-slide>
    <swiper-slide><img src='@/assets/images/image15.jpg'></swiper-slide>
  </swiper>
    </section>        
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


export default {
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
}
</script>