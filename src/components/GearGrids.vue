<template>
  <div id="scroll-pane">
    <Transition name="fade" mode="out-in">
      <div v-if="gridState === 'four'" class="gear-grids-container-four">
        <div class="swap-grid-button-container">
          <button class="swap-grid-button" @click="gridState = 'one'">Single Grid</button>
        </div>
        <div v-for="index in 4" :key="index" class="gear-grid">
          <div class="grid-header">
            <div></div>
            <div>
              <h1>Survivor {{ index }}</h1>
            </div>
            <div style="justify-self: end">
              <button style="font-size: 1.4rem" @click="clearOneGrid(index)">Clear</button>
            </div>
          </div>
          <ImageDropZone
            v-for="index2 in 9"
            :id="'' + index + index2"
            :key="index2"
            v-model:imageSource="imageLocations['' + index + index2]"
            @reset-image="imageLocations['' + index + index2] = defaultImage"
          />
        </div>
      </div>
      <div v-else-if="gridState === 'one'" class="gear-grids-container-one">
        <div class="swap-grid-button-container">
          <button class="swap-grid-button" @click="gridState = 'four'">All Grids</button>
        </div>
        <ph-caret-left v-if="currentDisplay > 1" class="arrow left-arrow" :size="72" @click="cycleGrid(-1)" />
        <Transition :name="currentDisplay > previousDisplay ? 'cycle-right' : 'cycle-left'" mode="out-in">
          <div v-if="currentDisplay === 1" key="1" ref="gridDiv" class="gear-grid">
            <div class="grid-header">
              <div></div>
              <div>
                <h1>Survivor 1</h1>
              </div>
              <div style="justify-self: end">
                <button style="font-size: 1.4rem" @click="clearOneGrid(1)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 1 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 1 + index]"
              @reset-image="imageLocations['' + 1 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 2" key="2" class="gear-grid">
            <div class="grid-header">
              <div></div>
              <div>
                <h1>Survivor 2</h1>
              </div>
              <div style="justify-self: end">
                <button style="font-size: 1.4rem" @click="clearOneGrid(2)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 2 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 2 + index]"
              @reset-image="imageLocations['' + 2 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 3" key="3" class="gear-grid">
            <div class="grid-header">
              <div></div>
              <div>
                <h1>Survivor 3</h1>
              </div>
              <div style="justify-self: end">
                <button style="font-size: 1.4rem" @click="clearOneGrid(3)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 3 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 3 + index]"
              @reset-image="imageLocations['' + 3 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 4" key="4" class="gear-grid">
            <div class="grid-header">
              <div></div>
              <div>
                <h1>Survivor 4</h1>
              </div>
              <div style="justify-self: end">
                <button style="font-size: 1.4rem" @click="clearOneGrid(4)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 4 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 4 + index]"
              @reset-image="imageLocations['' + 4 + index] = defaultImage"
            />
          </div>
        </Transition>
        <ph-caret-right v-if="currentDisplay < 4" class="arrow right-arrow" :size="72" @click="cycleGrid(1)" />
      </div>
    </Transition>
    <ModalWindow v-if="showExportGridModal" :width="'60%'" :height="'80%'">
      <div class="modal">
        <h2 style="grid-area: header">Test Header</h2>
        <img ref="gridImage" style="grid-area: image; place-self: center" />
        <button style="grid-area: yes" @click="download()">Download</button>
        <button style="grid-area: no" @click="showExportGridModal = false">Close</button>
      </div>
    </ModalWindow>
  </div>
</template>

<script setup lang="ts">
import ImageDropZone from "./ImageDropZone.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import { useGridStateStore } from "@/grid-state-store";
import { useClearButtonStore } from "@/clear-button-store";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, reactive, ref, watch } from "vue";
import { PhCaretLeft, PhCaretRight } from "phosphor-vue";
import { useSideBarSpacingDecorated } from "@/coded-styles";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import { useNavBarStateStore } from "@/nav-bar-state-store";
import mergeImages from "merge-images";
import { readAndCompressImage } from "browser-image-resizer";

interface ImageLocations {
  [id: string]: string;
}

const { gridState } = storeToRefs(useGridStateStore());
const { clearButtonState } = storeToRefs(useClearButtonStore());
const { showExportGridModal } = storeToRefs(useNavBarStateStore());

const gridDiv = ref<HTMLDivElement>();
const gridImage = ref<HTMLImageElement>();

async function download() {
  if (!gridImage.value) {
    console.error("image element is null");
    return;
  }
  try {
    const base64DataUrl = await mergeImages(
      [
        { src: imageLocations["11"], x: 0, y: 0 },
        { src: imageLocations["12"], x: 520, y: 0 },
        { src: imageLocations["13"], x: 1040, y: 0 },
        { src: imageLocations["14"], x: 0, y: 520 },
        { src: imageLocations["15"], x: 520, y: 520 },
        { src: imageLocations["16"], x: 1040, y: 520 },
        { src: imageLocations["17"], x: 0, y: 1040 },
        { src: imageLocations["18"], x: 520, y: 1040 },
        { src: imageLocations["19"], x: 1040, y: 1040 },
      ],
      {
        width: 1540,
        height: 1540,
      }
    );
    const rawImageBlob = await (await fetch(base64DataUrl)).blob();
    const resizedImageBlob = await readAndCompressImage(rawImageBlob, {
      quality: 0.8,
      width: 800,
      height: 800,
    });
    gridImage.value.src = URL.createObjectURL(resizedImageBlob);
  } catch (error) {
    console.error("Image merge or resize failed", error);
  }
}

const currentDisplay = ref(1);
const previousDisplay = ref(1);

const defaultImage = ref(new URL("../assets/gear_default.webp", import.meta.url).href);
const imageLocations: ImageLocations = reactive({});

const overflow = computed(() => (gridState.value === "one" ? "hidden" : "auto"));

onBeforeMount(() => fillImageLocations());

const someStore = useClearButtonStore();
someStore.$subscribe(() => {
  fillImageLocations();
  someStore.clearButtonState = false;
});

// watch(
//   () => clearButtonState.value,
//   () => {
//     fillImageLocations();
//     clearButtonState.value = false;
//   }
// );
watch(gridImage, () => download());

function clearOneGrid(index: number) {
  for (let i = 1; i <= 9; i++) {
    imageLocations["" + index + i] = defaultImage.value;
  }
}

function cycleGrid(change: number) {
  previousDisplay.value = currentDisplay.value;
  currentDisplay.value = currentDisplay.value + change;
}

function fillImageLocations() {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 9; j++) {
      imageLocations["" + i + j] = defaultImage.value;
    }
  }
}

const b64toBlob = async (base64: string) => (await fetch(base64)).blob();
</script>

<style scoped lang="scss">
#scroll-pane {
  display: grid;
  overflow: v-bind(overflow);
  position: relative;
}

.gear-grids-container-four {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto auto 1fr;
  gap: 3.2rem;
  margin: auto;
}

.gear-grids-container-one {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  gap: 1.6rem;
  margin: auto;
}

.swap-grid-button-container {
  grid-area: 1/1/1/3;
  margin: 1.6rem 0 0 0;
}

.swap-grid-button {
  font-size: 2rem;
  padding: 1.2rem 2.4rem;
}

.grid-header {
  grid-area: 1/1/1/4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
}

.gear-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr 1fr 1fr;
  gap: 0.8rem;
  margin: auto;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.left-arrow {
  left: v-bind(useSideBarSpacingDecorated);
}

.right-arrow {
  right: v-bind(useSideBarSpacingDecorated);
}

.modal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: v-bind(useSideBarSpacingDecorated);
  grid-template-areas:
    "header header"
    "image image"
    "yes no";
}

// cycle right
.cycle-right-enter-from {
  opacity: 0;
  transform: translateX(100vw);
}
.cycle-right-enter-active {
  transition: all 0.25s ease-out;
}
.cycle-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.cycle-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.cycle-right-leave-active {
  transition: all 0.25s ease-in;
}
.cycle-right-leave-to {
  opacity: 0;
  transform: translateX(-100vw);
}

// cycle left
.cycle-left-enter-from {
  opacity: 0;
  transform: translateX(-100vw);
}
.cycle-left-enter-active {
  transition: all 0.25s ease-out;
}
.cycle-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.cycle-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.cycle-left-leave-active {
  transition: all 0.25s ease-in;
}
.cycle-left-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}
</style>
