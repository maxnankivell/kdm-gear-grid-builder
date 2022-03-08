import { defineStore } from "pinia";
import { ref } from "vue";
import { GridsDisplayed } from "./types";

export const useGridStateStore = defineStore("gridStateStore", () => {
  const gridState = ref<GridsDisplayed>("one");
  return { gridState };
});

// import { useStore } from '@/grid-state-store'
// import { storeToRefs } from 'pinia'
// const { gridState } = storeToRefs(useStore())
