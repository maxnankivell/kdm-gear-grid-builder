import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useVersionStateStore = defineStore("versionStateStore", () => {
  const version = useStorage("version", 1.5);
  return { version };
});

// import { useVersionStateStore } from "@/stores/version-state-store";
// const { version } = storeToRefs(useVersionStateStore());
