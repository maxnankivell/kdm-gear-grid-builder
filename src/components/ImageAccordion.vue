<template>
  <div>
    <div
      class="accordion-header"
      :style="{
        'border-radius': isOpen ? '8px 8px 0 0 ' : '8px',
        width: useImageSize * 2 + useSideBarSpacingRaw * 3 + `px`,
      }"
      @click="isOpen = !isOpen"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="question">{{ formattedCategory }}</div>
      <ph-caret-down
        :size="32"
        class="chevron"
        :class="{ 'rotate-chevron-90': isHovered, 'rotate-chevron-180': isOpen }"
      />
    </div>
    <div style="overflow: hidden">
      <transition name="slide-down">
        <div v-if="isOpen" class="image-container">
          <template v-for="image in images" :key="image">
            <img :src="image" alt="gear image" class="image" draggable="true" @dragstart="onDragStart($event, image)" />
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { PhCaretDown } from "phosphor-vue";
import { useImageSize, useSideBarSpacingRaw, useSideBarSpacingDecorated } from "@/coded-styles";

interface Props {
  category: string;
  images: string[];
}

const props = defineProps<Props>();

const isOpen = ref(false);
const isHovered = ref(false);

const formattedCategory = computed(() => {
  const result = props.category.split("-");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }
  return result.join(" ");
});

const formattedImageSize = computed(() => useImageSize.value + `px`);

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
  transition: all 0.4s linear;
  // border-radius: 8px; handled by inline style

  &:hover {
    background-color: $oxford-blue-2-light;
    color: $white;
    padding: 1.2rem 1.2rem 1.8rem 1.2rem;
  }
}

.question {
  font-size: 2rem;
}

.chevron {
  margin-left: auto;
  transition: transform 0.4s linear;
}

.rotate-chevron-90 {
  transform: rotate(90deg);
}

.rotate-chevron-180 {
  transform: rotate(180deg);
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
  transition: all 0.4s linear;

  width: v-bind(formattedImageSize);
  height: v-bind(formattedImageSize);

  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
