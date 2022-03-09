import { computed, ref } from "vue";
import { useWindowSize } from "vue-window-size";
import { useGridStateStore } from "@/grid-state-store";
import { storeToRefs } from "pinia";

const { width, height } = useWindowSize();
// Returns size of image in pixels
export const useImageSize = computed((): number => {
  const { gridState } = storeToRefs(useGridStateStore());
  if (gridState.value === "four") {
    if (width.value < 1120) {
      return 75;
    }
    if (width.value < 1320) {
      return 100;
    }
    if (width.value < 1520) {
      return 125;
    }
    if (width.value < 1720) {
      return 150;
    }
    if (width.value < 1920) {
      return 175;
    }
    if (width.value < 2120) {
      return 200;
    }
    if (width.value < 2320) {
      return 225;
    }
    return 250;
  } else {
    if (width.value < 1100 || height.value < 720) {
      return 150;
    }
    if (width.value < 1300 || height.value < 860) {
      return 190;
    }
    if (width.value < 1500 || height.value < 980) {
      return 230;
    }
    if (width.value < 1700 || height.value < 1100) {
      return 270;
    }
    if (width.value < 1900 || height.value < 1200) {
      return 310;
    }
    if (width.value < 2100 || height.value < 1300) {
      return 350;
    }
    return 390;
  }
});

export const useSideBarSpacingRaw = ref(8); //update this to change the spacing in the sidebar
export const useSideBarSpacingDecorated = computed(() => useSideBarSpacingRaw.value + `px`);
