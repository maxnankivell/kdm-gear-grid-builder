import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavBarStateStore = defineStore("clearButtonStore", () => {
  const showExportGridModal = ref(false);
  return { showExportGridModal };
});

// import { useNavBarStateStore } from "@/nav-bar-state-store";
// const { showExportGridModal } = storeToRefs(useNavBarStateStore());
