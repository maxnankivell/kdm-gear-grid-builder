import App from "./App.vue";
import "@/assets/css/global.scss";
import { createPinia } from "pinia";
import VueClickAway from "vue3-click-away";
import { ViteSSG } from "vite-ssg/single-page";

// export const createApp = ViteSSG(App.use(VueClickAway).use(createPinia()));

export const createApp = ViteSSG(App, ({ app, initialState }) => {
  const pinia = createPinia();
  app.use(VueClickAway).use(pinia);

  if (import.meta.env.SSR) initialState.pinia = pinia.state.value;
  else pinia.state.value = initialState.pinia || {};
});
