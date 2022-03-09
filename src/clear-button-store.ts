import { defineStore } from "pinia";
import { ref } from "vue";

export const useClearButtonStore = defineStore("clearButtonStore", () => {
  const clearButtonState = ref(false);
  return { clearButtonState };
});

// import { useClearButtonStore } from "@/clear-button-store";
// const { clearButtonState } = storeToRefs(useClearButtonStore());
