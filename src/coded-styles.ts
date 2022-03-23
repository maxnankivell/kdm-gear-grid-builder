import { computed, ref } from "vue";
import { useWindowSize } from "vue-window-size";
import { useGridStateStore } from "@/stores/grid-state-store";
import { storeToRefs } from "pinia";

// Returns size of image in pixels
export const useImageSize = () => {
  const { width, height } = useWindowSize();
  const { gridState } = storeToRefs(useGridStateStore());
  return computed((): number => {
    if (gridState.value === "four") {
      if (width.value < 1200) {
        return 75;
      }
      if (width.value < 1400) {
        return 100;
      }
      if (width.value < 1600) {
        return 125;
      }
      if (width.value < 1800) {
        return 150;
      }
      if (width.value < 2000) {
        return 175;
      }
      if (width.value < 2200) {
        return 200;
      }
      if (width.value < 2400) {
        return 225;
      }
      return 250;
    } else {
      if (width.value < 880 || height.value < 650) {
        return 70;
      }
      if (width.value < 1080 || height.value < 800) {
        return 110;
      }
      if (width.value < 1280 || height.value < 930) {
        return 150;
      }
      if (width.value < 1480 || height.value < 1080) {
        return 190;
      }
      if (width.value < 1680 || height.value < 1180) {
        return 230;
      }
      if (width.value < 1880 || height.value < 1300) {
        return 270;
      }
      if (width.value < 2080 || height.value < 1400) {
        return 310;
      }
      if (width.value < 2280 || height.value < 1520) {
        return 350;
      }
      return 390;
    }
  });
};

export const useSideBarSpacingRaw = ref(16); //update this to change the spacing in the sidebar
export const useSideBarSpacingDecorated = computed(() => useSideBarSpacingRaw.value + `px`);
