<template>
  <div
    class="dropzone"
    :class="{ highlighted: isHovered }"
    @drop="onDrop($event)"
    @dragenter="onDragEnter($event)"
    @dragleave="isHovered = false"
    @dragover.prevent
  >
    <img :src="imageSource" class="gear-image" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const imageSource = ref("");
function onDrop(event: DragEvent) {
  if (!event.dataTransfer) {
    console.error("event null");
    return;
  }
  imageSource.value = event.dataTransfer.getData("text");
  isHovered.value = false;
}

const isHovered = ref(false);
function onDragEnter(event: DragEvent) {
  event.preventDefault();
  isHovered.value = true;
}
</script>

<style scoped lang="scss">
.dropzone {
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: $black-1-light;
}

.highlighted {
  background-color: $black-2-light;
}

.gear-image {
  pointer-events: none;
  width: 150px;
  height: 150px;
}
</style>
