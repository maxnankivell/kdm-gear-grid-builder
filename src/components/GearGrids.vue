<template>
  <div id="scroll-pane">
    <Transition name="fade" mode="out-in">
      <div v-if="gridState === 'four'" class="gear-grids-container-four">
        <div v-for="index in 4" :key="index" class="gear-grid">
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
        <ph-caret-left v-if="currentDisplay > 1" class="arrow left-arrow" :size="64" @click="cycleGrid(-1)" />
        <Transition :name="currentDisplay > previousDisplay ? 'cycle-right' : 'cycle-left'" mode="out-in">
          <div v-if="currentDisplay === 1" key="1" class="gear-grid">
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 1 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 1 + index]"
              @reset-image="imageLocations['' + 1 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 2" key="2" class="gear-grid">
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 2 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 2 + index]"
              @reset-image="imageLocations['' + 2 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 3" key="3" class="gear-grid">
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 3 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 3 + index]"
              @reset-image="imageLocations['' + 3 + index] = defaultImage"
            />
          </div>
          <div v-else-if="currentDisplay === 4" key="4" class="gear-grid">
            <ImageDropZone
              v-for="index in 9"
              :id="'' + 4 + index"
              :key="index"
              v-model:imageSource="imageLocations['' + 4 + index]"
              @reset-image="imageLocations['' + 4 + index] = defaultImage"
            />
          </div>
        </Transition>
        <ph-caret-right v-if="currentDisplay < 4" class="arrow right-arrow" :size="64" @click="cycleGrid(1)" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import ImageDropZone from "./ImageDropZone.vue";
import { useGridStateStore } from "@/grid-state-store";
import { useClearButtonStore } from "@/clear-button-store";
import { storeToRefs } from "pinia";
import { onBeforeMount, reactive, ref, watch } from "vue";
import { PhCaretLeft, PhCaretRight } from "phosphor-vue";
import { useSideBarSpacingDecorated } from "@/coded-styles";

interface ImageLocations {
  [id: string]: string;
}

const { gridState } = storeToRefs(useGridStateStore());
const { clearButtonState } = storeToRefs(useClearButtonStore());

const currentDisplay = ref(1);
const previousDisplay = ref(1);

const defaultImage = ref(new URL("../assets/gear_default.webp", import.meta.url).href);
const imageLocations: ImageLocations = reactive({});

onBeforeMount(() => fillImageLocations());

watch(gridState, () => hideXOverflow("scroll-pane", 1000));
watch(clearButtonState, () => {
  fillImageLocations();
  clearButtonState.value = false;
});

function cycleGrid(change: number) {
  hideXOverflow("scroll-pane", 1000);

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

function hideXOverflow(elementId: string, time: number) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById(elementId)!.style.overflowX = "hidden";
  setTimeout(function () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById(elementId)!.style.overflowX = "auto";
  }, time);
}
</script>

<style scoped lang="scss">
#scroll-pane {
  display: grid;
  overflow: auto;
  position: relative;
}

.gear-grids-container-four {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3.2rem;
  margin: auto;
}

.gear-grids-container-one {
  display: grid;
  margin: auto;
}

.gear-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
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

// cycle right
.cycle-right-enter-from {
  opacity: 0;
  transform: translateX(100vw);
}
.cycle-right-enter-active {
  transition: all 0.4s ease-out;
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
  transition: all 0.4s ease-in;
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
  transition: all 0.4s ease-out;
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
  transition: all 0.4s ease-in;
}
.cycle-left-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}
</style>
