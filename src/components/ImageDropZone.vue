<template>
  <div
    class="dropzone"
    :class="{ highlighted: dragPositionCounter > 0 }"
    @drop="onDrop($event)"
    @dragenter.prevent="dragPositionCounter++"
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
        @dragend="onDragEnd($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from "vue";

interface Props {
  id: string;
}

const props = defineProps<Props>();

const defaultImage = new URL("../assets/gear_default.webp", import.meta.url).href;
const imageSource = ref(defaultImage);

let dropId = `-1`;

function onDrop(event: DragEvent): void {
  event.preventDefault();
  dragPositionCounter.value = 0;

  if (!event.dataTransfer || !event.dataTransfer.getData("imageAndPosition")) {
    console.error("event null");
    return;
  }
  const arr = event.dataTransfer.getData("imageAndPosition").split(`|`);
  imageSource.value = arr[0];
  dropId = arr[1];
}

const dragPositionCounter = ref(0); // if 0 then not hovering a dropzone and if > 0 is hovering

const isDefaultImage = computed(() => imageSource.value.endsWith("gear_default.webp"));

function onDragStart(event: DragEvent): void {
  if (!event.dataTransfer || isDefaultImage.value) {
    console.warn("drag cancel");
    event.preventDefault();
    return;
  }
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("imageAndPosition", imageSource.value + `|${props.id}`);
}

function onDragEnd(event: DragEvent): void {
  if (!event.dataTransfer || event.dataTransfer.dropEffect === "none" || dropId === props.id) {
    dropId = `-1`;
    return;
  }
  imageSource.value = defaultImage;
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
