<template>
  <div class="scroll-pane">
    <div class="gear-grids-container">
      <div v-for="index in 4" :key="index" class="gear-grid">
        <ImageDropZone v-for="index2 in 9" :id="'' + index + index2" :key="index2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, withDefaults } from "vue";
import ImageDropZone from "./ImageDropZone.vue";

interface Props {
  msg: string;
  test?: string;
}

const props = withDefaults(defineProps<Props>(), {
  test: "hello",
});
</script>

<style scoped lang="scss">
.scroll-pane {
  display: flex;
  overflow: auto;
}

.gear-grids-container {
  display: grid;
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
}
</style>
