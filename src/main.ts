import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/global.scss";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
