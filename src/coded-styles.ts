import { computed, ref } from "vue";
import { useWindowSize } from "vue-window-size";
import { useGridStateStore } from "@/grid-state-store";
import { storeToRefs } from "pinia";

const { width, height } = useWindowSize();
// Returns size of image in pixels
export const useImageSize = computed((): number => {
  const { gridState } = storeToRefs(useGridStateStore());
  if (gridState.value === "four") {
    if (width.value < 1150) {
      return 75;
    }
    if (width.value < 1380) {
      return 100;
    }
    if (width.value < 1580) {
      return 125;
    }
    if (width.value < 1780) {
      return 150;
    }
    if (width.value < 1980) {
      return 175;
    }
    if (width.value < 2180) {
      return 200;
    }
    if (width.value < 2380) {
      return 225;
    }
    return 250;
  } else {
    if (width.value < 960 || height.value < 700) {
      return 110;
    }
    if (width.value < 1160 || height.value < 830) {
      return 150;
    }
    if (width.value < 1360 || height.value < 980) {
      return 190;
    }
    if (width.value < 1560 || height.value < 1080) {
      return 230;
    }
    if (width.value < 1760 || height.value < 1200) {
      return 270;
    }
    if (width.value < 1960 || height.value < 1300) {
      return 310;
    }
    if (width.value < 2160 || height.value < 1420) {
      return 350;
    }
    return 390;
  }
});

export const useSideBarSpacingRaw = ref(16); //update this to change the spacing in the sidebar
export const useSideBarSpacingDecorated = computed(() => useSideBarSpacingRaw.value + `px`);
