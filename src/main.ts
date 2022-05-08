import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/global.scss";
import { createPinia } from "pinia";
import VueClickAway from "vue3-click-away";

createApp(App).use(VueClickAway).use(createPinia()).mount("#app");
