<template>
  <ModalWindow :modal-width="modalWidth" :modal-height="modalHeight">
    <div class="export-grid-modal">
      <div style="grid-area: header; border-bottom: 1px solid white" class="grid-header">
        <div></div>
        <div>
          <h1>Export Grids</h1>
        </div>
        <div style="justify-self: end">
          <button @click="emit('close')">Close</button>
        </div>
      </div>
      <div style="grid-area: image-area" class="image-area">
        <img ref="gridImageOne" style="place-self: center" />
        <img ref="gridImageTwo" style="place-self: center" />
        <img ref="gridImageThree" style="place-self: center" />
        <img ref="gridImageFour" style="place-self: center" />
      </div>
      <div style="grid-area: export-sidebar" class="export-sidebar">
        <div v-for="index in 4" :key="index" class="export-toggle-boxs">
          <div>Download Survivor: {{ index }}</div>
          <ToggleSwitch v-model="toggleSwitches[index - 1]"></ToggleSwitch>
        </div>
        <button style="margin-top: 1.2rem" @click="download()">Download</button>
      </div>
    </div>
  </ModalWindow>
</template>

<script setup lang="ts">
import ModalWindow from "@/components/ModalWindow.vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
import { computed, defineEmits, defineProps, onMounted, ref, watch } from "vue";
import mergeImages from "merge-images";
import { readAndCompressImage } from "browser-image-resizer";
import { ImageLocations } from "@/types";
import { useWindowSize } from "vue-window-size";
import { watchDebounced } from "@vueuse/core";

interface Props {
  imageLocations: ImageLocations;
  modalWidth: string;
  modalHeight: string;
}

const emit = defineEmits<{
  (emit: "close"): void;
}>();

const props = defineProps<Props>();

const toggleSwitches = ref([false, false, false, false]);
const gridImageOne = ref<HTMLImageElement>();
const gridImageTwo = ref<HTMLImageElement>();
const gridImageThree = ref<HTMLImageElement>();
const gridImageFour = ref<HTMLImageElement>();

const { width, height } = useWindowSize();

const downSizedImageSize = computed(() => {
  const imageAreaHeight = (height.value * 0.9 - 120) / 2;
  const imageAreaWidth = (width.value * 0.6 - 300) / 2;
  const constrainingValue = imageAreaHeight < imageAreaWidth ? imageAreaHeight : imageAreaWidth;
  return constrainingValue < 600 ? constrainingValue : 600;
});

onMounted(() => loadGridImagePreview());

watchDebounced([width, height], () => loadGridImagePreview(), { debounce: 20 });

function download() {
  console.log("TODO");
}

async function loadGridImagePreview() {
  if (!gridImageOne.value || !gridImageTwo.value || !gridImageThree.value || !gridImageFour.value) {
    console.error("image element is null");
    return;
  }
  try {
    const gridOne = await resizeGridImage(await createGridImage(1));
    const gridTwo = await resizeGridImage(await createGridImage(2));
    const gridThree = await resizeGridImage(await createGridImage(3));
    const gridFour = await resizeGridImage(await createGridImage(4));
    gridImageOne.value.src = gridOne;
    gridImageTwo.value.src = gridTwo;
    gridImageThree.value.src = gridThree;
    gridImageFour.value.src = gridFour;
  } catch (error) {
    console.error("Image merge or resize failed", error);
  }
}

async function createGridImage(gridNumber: number): Promise<Blob> {
  const base64DataUrl = await mergeImages(
    [
      { src: props.imageLocations[gridNumber + "1"], x: 0, y: 0 },
      { src: props.imageLocations[gridNumber + "2"], x: 520, y: 0 },
      { src: props.imageLocations[gridNumber + "3"], x: 1040, y: 0 },
      { src: props.imageLocations[gridNumber + "4"], x: 0, y: 520 },
      { src: props.imageLocations[gridNumber + "5"], x: 520, y: 520 },
      { src: props.imageLocations[gridNumber + "6"], x: 1040, y: 520 },
      { src: props.imageLocations[gridNumber + "7"], x: 0, y: 1040 },
      { src: props.imageLocations[gridNumber + "8"], x: 520, y: 1040 },
      { src: props.imageLocations[gridNumber + "9"], x: 1040, y: 1040 },
    ],
    {
      width: 1540,
      height: 1540,
    }
  );
  return (await fetch(base64DataUrl)).blob();
}

async function resizeGridImage(imageBlob: Blob): Promise<string> {
  const resizedImageBlob = await readAndCompressImage(imageBlob, {
    quality: 0.8,
    maxWidth: downSizedImageSize.value,
    maxHeight: downSizedImageSize.value,
  });
  return URL.createObjectURL(resizedImageBlob);
}
</script>

<style scoped lang="scss">
.grid-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
}

.export-grid-modal {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "header header"
    "image-area export-sidebar";
}

.image-area {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin: auto;
}

.export-sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-left: 1px solid white;
  padding: 1.2rem;
}

.export-toggle-boxs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
}
</style>
