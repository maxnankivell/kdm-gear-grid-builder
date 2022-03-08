<template>
  <div
    class="dropzone"
    :class="{ highlighted: dragPositionCounter > 0 }"
    @drop="onDrop($event)"
    @dragenter="onDragEnter($event)"
    @dragleave="dragPositionCounter--"
    @dragover.prevent
  >
    <div>
      <img
        :src="imageSource"
        class="gear-image"
        :class="{ 'no-drag': isDefaultImage }"
        :draggable="!isDefaultImage"
        @dragstart="onDragStart($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

function test() {
  // console.log(imageSource.value);
  // console.log(isDefaultImage.value);
  console.log("leave");
}

const imageSource = ref(new URL("../assets/gear_default.webp", import.meta.url).href);

function onDrop(event: DragEvent) {
  if (!event.dataTransfer) {
    console.error("event null");
    return;
  }
  imageSource.value = event.dataTransfer.getData("text");
  dragPositionCounter.value = 0;
}

const dragPositionCounter = ref(0); // if 0 then not hovering a dropzone and if > 0 is hovering
// watch(dragPositionCounter, () => console.log(dragPositionCounter.value));
function onDragEnter(event: DragEvent) {
  event.preventDefault();
  dragPositionCounter.value++;
}

const isDefaultImage = computed(() => imageSource.value.endsWith("gear_default.webp"));

function onDragStart(event: DragEvent) {
  console.log(isDefaultImage.value);
  if (!event.dataTransfer || isDefaultImage.value) {
    console.warn("drag cancel");
    event.preventDefault();
    return;
  }
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("text", imageSource.value);
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
  width: 150px;
  height: 150px;
}

.no-drag {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
</style>
