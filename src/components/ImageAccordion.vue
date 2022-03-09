<template>
  <div>
    <div
      class="accordion-header"
      :style="{
        'border-radius': isOpen ? '8px 8px 0 0 ' : '8px',
        width: useImageSize * 2 + useSideBarSpacingRaw * 3 + `px`,
      }"
      @click="isOpen = !isOpen"
    >
      <div class="question">{{ category }}</div>
      <ph-caret-down :size="32" style="margin-left: auto" />
    </div>
    <div v-if="isOpen" class="image-container">
      <template v-for="image in images" :key="image">
        <img
          :src="image"
          alt="gear image"
          class="image"
          :style="{ width: useImageSize + `px`, height: useImageSize + `px` }"
          draggable="true"
          @dragstart="onDragStart($event, image)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { PhCaretDown } from "phosphor-vue";
import { useImageSize, useSideBarSpacingRaw, useSideBarSpacingDecorated } from "@/coded-styles";

interface Props {
  category: string;
  images: string[];
}

const props = defineProps<Props>();

const isOpen = ref(false);

function onDragStart(event: DragEvent, imageSource: string) {
  if (!event.dataTransfer) {
    console.warn("drag cancel");
    return;
  }
  event.dataTransfer.effectAllowed = "copy";
  event.dataTransfer.dropEffect = "copy";
  event.dataTransfer.setData("imageAndPosition", imageSource + "|-1");
}
</script>

<style scoped lang="scss">
.accordion-header {
  display: flex;
  align-items: center;
  padding: 1.2rem;
  font-size: 2rem;
  background-color: $oxford-blue;
  color: $platinum;
  cursor: pointer;
  // border-radius: 8px; handled by inline style

  &:hover {
    background-color: $oxford-blue-2-light;
    color: $white;
  }
}

.question {
  font-size: 2rem;
}

.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: v-bind(useSideBarSpacingDecorated);
  gap: v-bind(useSideBarSpacingDecorated);
  background-color: $oxford-blue-1-light;
}

.image {
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
}
</style>
