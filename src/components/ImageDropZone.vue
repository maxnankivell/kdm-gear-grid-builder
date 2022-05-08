<template>
  <div
    class="dropzone"
    :class="{ highlighted: dragPositionCounter > 0 }"
    @drop="onDrop($event)"
    @dragenter.prevent="dragPositionCounter++"
    @dragleave="dragPositionCounter--"
    @dragover.prevent="if ($event.dataTransfer) $event.dataTransfer.dropEffect = 'move';"
  >
    <div>
      <img
        :src="imageSource"
        class="image"
        :class="{ 'no-drag': isDefaultImage }"
        :style="{ width: imageSize + `px`, height: imageSize + `px`, 'border-radius': imageSize / 10 + `px` }"
        :draggable="!isDefaultImage"
        @dragstart="onDragStart($event)"
        @dragend="onDragEnd($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps, defineEmits } from "vue";
import { useImageSize, useSideBarSpacingDecorated } from "@/coded-styles";
import { defaultImage } from "@/structures/initial-image-structure";

interface Props {
  id: string;
  imageSource: string;
}

const emit = defineEmits<{
  (emit: "update:image-source", source: string): void;
  (emit: "swap-image", imageAndId: string): void;
  (emit: "reset-image"): void;
}>();

const props = defineProps<Props>();

const imageSource = computed({
  get: () => props.imageSource,
  set: (newValue: string) => emit("update:image-source", newValue),
});

const imageSize = useImageSize();

let recievedDropZoneId = `-1`;
let imageToSendToReciever = defaultImage;

const dragPositionCounter = ref(0); // if 0 then not hovering a dropzone and if > 0 is hovering

const isDefaultImage = computed(() => imageSource.value === defaultImage);

function onDrop(event: DragEvent): void {
  event.preventDefault();
  dragPositionCounter.value = 0;

  if (!event.dataTransfer || !event.dataTransfer.getData("imageAndPosition")) {
    console.error("event null");
    return;
  }
  const arr = event.dataTransfer.getData("imageAndPosition").split(`|`);
  imageToSendToReciever = imageSource.value;
  imageSource.value = arr[0];
  recievedDropZoneId = arr[1];

  if (recievedDropZoneId === props.id || recievedDropZoneId === `-1`) {
    recievedDropZoneId = `-1`;
    return;
  }
  emit("swap-image", imageToSendToReciever + `|${recievedDropZoneId}`);
}

function onDragStart(event: DragEvent): void {
  if (!event.dataTransfer || isDefaultImage.value) {
    console.warn("drag cancel");
    event.preventDefault();
    return;
  }
  event.dataTransfer.effectAllowed = "linkMove"; // move is move or swap and link is delete
  event.dataTransfer.setData("imageAndPosition", imageSource.value + `|${props.id}`);
}

function onDragEnd(event: DragEvent): void {
  if (event.dataTransfer && event.dataTransfer.dropEffect === "link") {
    emit("reset-image");
  }
}
</script>

<style scoped lang="scss">
.dropzone {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: v-bind(useSideBarSpacingDecorated);
  background-color: $black-1-light;
}

.highlighted {
  background-color: $black-2-light;
}

.image {
  transition: all 0.25s linear;

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

.no-drag {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

  cursor: default;
  cursor: -moz-default;
  cursor: -webkit-default;

  &:active {
    cursor: default;
    cursor: -moz-default;
    cursor: -webkit-default;
    transform: scale(1);
  }

  &:hover {
    transform: scale(1);
  }
}
</style>
