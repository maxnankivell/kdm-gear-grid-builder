import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { Expansion } from "../structures/gear-array";

export const useExpansionsStateStore = defineStore("expansionsStateStore", () => {
  const expansions = useStorage<string[]>("expansions", []);
  return { expansions };
});

// import { useExpansionsStateStore } from "@/stores/expansions-state-store";
// const { expansions } = storeToRefs(useExpansionsStateStore());
