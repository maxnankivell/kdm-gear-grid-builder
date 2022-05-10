import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { GridsDisplayed } from "../types";

export const useGridStateStore = defineStore("gridStateStore", () => {
  const gridState = useStorage<GridsDisplayed>("gridState", "one");
  return { gridState };
});

// import { useGridStateStore } from '@/grid-state-store'
// import { storeToRefs } from 'pinia'
// const { gridState } = storeToRefs(useGridStateStore())
