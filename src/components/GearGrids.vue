<template>
  <div class="scroll-pane">
    <div class="gear-grids-container" :class="{ 'gear-grids-container-four': gridState === 'four' }">
      <ph-caret-left
        v-if="currentDisplay > 1 && gridState === 'one'"
        class="arrow left-arrow"
        :size="64"
        @click="cycleGrid(-1)"
      />
      <div v-for="index in 4" :key="index">
        <Transition :name="currentDisplay > previousDisplay ? 'cycle-right' : 'cycle-left'">
          <div v-show="index === currentDisplay || gridState === 'four'" class="gear-grid">
            <ImageDropZone v-for="index2 in 9" :id="'' + index + index2" :key="index2" />
          </div>
        </Transition>
      </div>
      <ph-caret-right
        v-if="currentDisplay < 4 && gridState === 'one'"
        class="arrow right-arrow"
        :size="64"
        @click="cycleGrid(1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageDropZone from "./ImageDropZone.vue";
import { useGridStateStore } from "@/grid-state-store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { PhCaretLeft, PhCaretRight } from "phosphor-vue";
import { useSideBarSpacingDecorated } from "@/coded-styles";

const { gridState } = storeToRefs(useGridStateStore());

const currentDisplay = ref(1);
const previousDisplay = ref(1);

function cycleGrid(change: number) {
  previousDisplay.value = currentDisplay.value;
  currentDisplay.value = currentDisplay.value + change;
}
</script>

<style scoped lang="scss">
.scroll-pane {
  display: grid;
  overflow: auto;
  position: relative;
}

.gear-grids-container {
  display: grid;
  margin: auto;
}

.gear-grids-container-four {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3.2rem;
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

.cycle-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.cycle-right-enter-active {
  transition: all 0.5s ease-out;
}
.cycle-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.cycle-left-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.cycle-left-enter-active {
  transition: all 0.5s ease-out;
}
.cycle-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
