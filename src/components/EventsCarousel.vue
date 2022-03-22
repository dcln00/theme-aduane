<template>
<swiper
:navigation="false"
:modules="modules"
:loop="true"
:autoplay="{
      delay: 5500,
      disableOnInteraction: false,
    }"
:effect="'fade'"
class="mySwiper">
        <swiper-slide v-for="event in currentEvents" :key="event.id">
    <section id="events-carousel" class="container d-flex justify-content-center align-items-center">
            <div id="main-event"  class="d-flex justify-content-center align-items-center">
                <img :src="event.img">
            </div>
            <div id="side-event" class="d-flex justify-content-center align-items-center">
                <div>
                    <span class="event-text">{{event.text}}</span>
                    <span class="event-title">{{event.firstline}}<br> {{event.secondline}}</span>
                    <span class="event-par">{{event.par}}</span>
                    <button>{{event.button}}</button>
                </div>
            </div>
        </section>
        </swiper-slide>
        </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Navigation } from "swiper";
export default {
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay, Navigation],
    };
  },
  data(){
        return {
            currentEvents: [
                {img:'./src/assets/images/image18.jpg', text:'cocktails', firstline:'Camp', secondline:'Barbados', par:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum', button:'Sign up', id:1},
                {img:'./src/assets/images/image19.jpg', text:'cocktails', firstline:'Boozy', secondline:'Sundays', par:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum', button:'Read More', id:2},
            ]
        }
    },
}
</script>

<style lang="scss" >
    @import './src/scss/layout/events-carousel';
    
    @media screen and (max-width: 576px) {
    #events-carousel {
        margin-bottom:100px;
        flex-direction: column;

        #main-event {
            width: 100%;
            left:0;
        }

        #side-event {
            
            width: 100%;
            right:0;
            bottom:0;
            z-index:0;
        }
    }
    }
</style>