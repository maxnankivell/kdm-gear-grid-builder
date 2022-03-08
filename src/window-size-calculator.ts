import { computed } from "vue";
import { useWindowSize } from "vue-window-size";

const { width } = useWindowSize();
export const useImageSize = computed(() => {
  if (width.value < 1460) {
    return `125px`;
  }
  return `150px`;
});
