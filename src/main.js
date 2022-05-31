import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.css';
import LottieAnimation from "lottie-web-vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);

app.component('Datepicker', Datepicker);

app.use(LottieAnimation);

app.use(router);

app.mount("#app");