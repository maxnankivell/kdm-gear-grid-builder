import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { type Versions } from "../structures/gear-array";

export const useVersionStateStore = defineStore("versionStateStore", () => {
  const version = useStorage<Versions>("version", "1.5");
  return { version };
});

// import { useVersionStateStore } from "@/stores/version-state-store";
// const { version } = storeToRefs(useVersionStateStore());
