import { defineStore } from "pinia";
import { ref } from "vue";

export const useVersionStateStore = defineStore("versionStateStore", () => {
  const version = ref(1.5);
  return { version };
});

// import { useVersionStateStore } from "@/stores/version-state-store";
// const { version } = storeToRefs(useVersionStateStore());
