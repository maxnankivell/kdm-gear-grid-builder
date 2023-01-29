<template>
  <div id="scroll-pane">
    <Transition name="fade" mode="out-in">
      <div v-if="gridState === 'four'" class="gear-grids-container-four">
        <div class="swap-grid-button-container">
          <button class="swap-grid-button" @click="gridState = 'one'">Change To Single Grid View</button>
        </div>
        <div v-for="index in 4" :key="index" class="gear-grid">
          <div style="grid-area: 1/1/1/4" class="grid-header">
            <div
              class="trash-container"
              :class="{ outline: dragPositionCounter[index - 1] > 0 }"
              @dragenter.prevent="dragPositionCounter[index - 1]++"
              @dragleave="dragPositionCounter[index - 1]--"
              @dragover.prevent="if ($event.dataTransfer) $event.dataTransfer.dropEffect = 'link';"
              @drop.prevent="dragPositionCounter[index - 1] = 0"
            >
              <ph-trash :size="40" />
            </div>
            <div>
              <h1>Survivor {{ index }}</h1>
            </div>
            <div style="justify-self: end">
              <button @click="clearOneGrid(index)">Clear</button>
            </div>
          </div>
          <ImageDropZone
            v-for="index2 in 9"
            :id="'' + index + index2"
            :key="index2"
            v-model:imageSource="imageLocations['' + index + index2]"
            @swap-image="(imageAndId) => (imageLocations[imageAndId.split(`|`)[1]] = imageAndId.split(`|`)[0])"
            @reset-image="imageLocations['' + index + index2] = defaultImage"
          />
        </div>
      </div>
      <div v-else-if="gridState === 'one'" class="gear-grids-container-one">
        <div class="swap-grid-button-container">
          <button class="swap-grid-button" @click="gridState = 'four'">Change To All Grid View</button>
        </div>
        <ph-caret-left v-if="currentDisplay > 1" class="arrow left-arrow" :size="72" @click="cycleGrid(-1)" />
        <Transition :name="currentDisplay > previousDisplay ? 'cycle-right' : 'cycle-left'" mode="out-in">
          <div v-if="currentDisplay === 1" key="1" class="gear-grid">
            <div style="grid-area: 1/1/1/4" class="grid-header">
              <div
                class="trash-container"
                :class="{ outline: dragPositionCounter[0] > 0 }"
                @dragenter.prevent="dragPositionCounter[0]++"
                @dragleave="dragPositionCounter[0]--"
                @dragover.prevent="if ($event.dataTransfer) $event.dataTransfer.dropEffect = 'link';"
                @drop.prevent="dragPositionCounter[0] = 0"
              >
                <ph-trash :size="40" />
              </div>
              <div>
                <h1>Survivor 1</h1>
              </div>
              <div style="justify-self: end">
                <button @click="clearOneGrid(1)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 1 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 1 + index]"
              @swap-image="(imageAndId) => (imageLocations[imageAndId.split(`|`)[1]] = imageAndId.split(`|`)[0])"
              @reset-image="imageLocations['' + 1 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 2" key="2" class="gear-grid">
            <div style="grid-area: 1/1/1/4" class="grid-header">
              <div
                class="trash-container"
                :class="{ outline: dragPositionCounter[1] > 0 }"
                @dragenter.prevent="dragPositionCounter[1]++"
                @dragleave="dragPositionCounter[1]--"
                @dragover.prevent="if ($event.dataTransfer) $event.dataTransfer.dropEffect = 'link';"
                @drop.prevent="dragPositionCounter[1] = 0"
              >
                <ph-trash :size="40" />
              </div>
              <div>
                <h1>Survivor 2</h1>
              </div>
              <div style="justify-self: end">
                <button @click="clearOneGrid(2)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 2 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 2 + index]"
              @swap-image="(imageAndId) => (imageLocations[imageAndId.split(`|`)[1]] = imageAndId.split(`|`)[0])"
              @reset-image="imageLocations['' + 2 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 3" key="3" class="gear-grid">
            <div style="grid-area: 1/1/1/4" class="grid-header">
              <div
                class="trash-container"
                :class="{ outline: dragPositionCounter[2] > 0 }"
                @dragenter.prevent="dragPositionCounter[2]++"
                @dragleave="dragPositionCounter[2]--"
                @dragover.prevent="if ($event.dataTransfer) $event.dataTransfer.dropEffect = 'link';"
                @drop.prevent="dragPositionCounter[2] = 0"
              >
                <ph-trash :size="40" />
              </div>
              <div>
                <h1>Survivor 3</h1>
              </div>
              <div style="justify-self: end">
                <button @click="clearOneGrid(3)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 3 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 3 + index]"
              @swap-image="(imageAndId) => (imageLocations[imageAndId.split(`|`)[1]] = imageAndId.split(`|`)[0])"
              @reset-image="imageLocations['' + 3 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 4" key="4" class="gear-grid">
            <div style="grid-area: 1/1/1/4" class="grid-header">
              <div
                class="trash-container"
                :class="{ outline: dragPositionCounter[3] > 0 }"
                @dragenter.prevent="dragPositionCounter[3]++"
                @dragleave="dragPositionCounter[3]--"
                @dragover.prevent="if ($event.dataTransfer) $event.dataTransfer.dropEffect = 'link';"
                @drop.prevent="dragPositionCounter[3] = 0"
              >
                <ph-trash :size="40" />
              </div>
              <div>
                <h1>Survivor 4</h1>
              </div>
              <div style="justify-self: end">
                <button @click="clearOneGrid(4)">Clear</button>
              </div>
            </div>
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 4 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 4 + index]"
              @swap-image="(imageAndId) => (imageLocations[imageAndId.split(`|`)[1]] = imageAndId.split(`|`)[0])"
              @reset-image="imageLocations['' + 4 + index] = defaultImage"
            />
          </div>
        </Transition>
        <ph-caret-right v-if="currentDisplay < 4" class="arrow right-arrow" :size="72" @click="cycleGrid(1)" />
      </div>
    </Transition>
    <ExportGridModal
      v-if="showExportGridModal"
      :image-locations="imageLocations"
      :modal-width="'60vw'"
      :modal-height="'90vh'"
      @close="showExportGridModal = false"
    />
    <ModalWindow v-if="showClearAllModal" :modal-width="'420px'" :modal-height="'220px'">
      <div class="clear-modal">
        <h1 style="grid-area: header">Confirm</h1>
        <p style="grid-area: paragraph; font-size: 1.2rem">Are you sure you want to clear ALL grids?</p>
        <button style="grid-area: yes" @click="onClearAll">Yes</button>
        <button style="grid-area: no" @click="showClearAllModal = false">No</button>
      </div>
    </ModalWindow>
    <ModalWindow v-if="showClearModal" :modal-width="'420px'" :modal-height="'220px'">
      <div class="clear-modal">
        <h1 style="grid-area: header">Confirm</h1>
        <p style="grid-area: paragraph; font-size: 1.2rem">Are you sure you want to clear this grid?</p>
        <button style="grid-area: yes" @click="confirmClearOneGrid">Yes</button>
        <button style="grid-area: no" @click="showClearModal = false">No</button>
      </div>
    </ModalWindow>
  </div>
</template>

<script setup lang="ts">
import ImageDropZone from "@/components/ImageDropZone.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import { useGridStateStore } from "@/stores/grid-state-store";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import { PhCaretLeft, PhCaretRight, PhTrash } from "phosphor-vue";
import { useSideBarSpacingDecorated } from "@/coded-styles";
import { useNavBarStateStore } from "@/stores/nav-bar-state-store";
import { ImageLocations } from "@/types";
import ExportGridModal from "./ExportGridModal.vue";
import { useStorage } from "@vueuse/core";
import initialImageStructure from "@/structures/initial-image-structure";
import { useVersionStateStore } from "@/stores/version-state-store";

const { version } = storeToRefs(useVersionStateStore());
const { gridState } = storeToRefs(useGridStateStore());
const { showExportGridModal, showClearAllModal } = storeToRefs(useNavBarStateStore());

const currentDisplay = ref(1);
const previousDisplay = ref(1);

const dragPositionCounter = ref([0, 0, 0, 0]); // if 0 then not hovering a dropzone and if > 0 is hovering

const showClearModal = ref(false);

const defaultImage = ref("/gear_default.webp");
const imageLocations = useStorage<ImageLocations>("imageLocations", initialImageStructure);

const overflow = computed(() => (gridState.value === "one" ? "hidden" : "auto"));

watch(version, () => resetImagesAfterVersionChange(version.value));

let gridToClear: number;
function clearOneGrid(index: number) {
  gridToClear = index;
  showClearModal.value = true;
}
function confirmClearOneGrid() {
  for (let i = 1; i <= 9; i++) {
    imageLocations.value["" + gridToClear + i] = defaultImage.value;
  }
  showClearModal.value = false;
}

function cycleGrid(change: number) {
  previousDisplay.value = currentDisplay.value;
  currentDisplay.value = currentDisplay.value + change;
}

function resetImagesToDefault() {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 9; j++) {
      imageLocations.value["" + i + j] = defaultImage.value;
    }
  }
}

function resetImagesAfterVersionChange(newVerson: number) {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 9; j++) {
      if (newVerson === 1.5) {
        if (imageLocations.value["" + i + j].includes(`1.6`)) {
          imageLocations.value["" + i + j] = defaultImage.value;
        }
      } else if (newVerson === 1.6) {
        if (imageLocations.value["" + i + j].includes(`1.5`)) {
          imageLocations.value["" + i + j] = defaultImage.value;
        }
      }
    }
  }
}

function onClearAll() {
  resetImagesToDefault();
  showClearAllModal.value = false;
}
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
}

.trash-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}

.outline {
  outline: 1px solid red;
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

.clear-modal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  gap: v-bind(useSideBarSpacingDecorated);
  grid-template-areas:
    "header header"
    "paragraph paragraph"
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
