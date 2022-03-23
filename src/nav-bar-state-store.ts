import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavBarStateStore = defineStore("navBarStateStore", () => {
  const showExportGridModal = ref(false);
  const showClearAllModal = ref(false);
  return { showExportGridModal, showClearAllModal };
});

// import { useNavBarStateStore } from "@/nav-bar-state-store";
// const { showExportGridModal, showClearAllModal } = storeToRefs(useNavBarStateStore());
