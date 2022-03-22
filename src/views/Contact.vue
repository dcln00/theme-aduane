<script>
import HeadSection from "../components/HeadSection.vue";
import ContactActions from "../components/ContactActions.vue";
import Reservations from "../components/Reservations.vue";
import ContactWrapper from "../components/ContactWrapper.vue";


export default {
    components: { HeadSection, ContactActions, Reservations, ContactWrapper },
    data() {
        return {
            firstline:'Contact',
            secondline:''
        }
    }
}
</script>

<template>
<ContactWrapper>
    <img src="@/assets/images/image9.png">
</ContactWrapper>
  <HeadSection :firstline="firstline"/>
  <ContactActions />
  <Reservations />
</template>

<style lang="scss">
    @import '@/scss/pages/contact-page';
</style>