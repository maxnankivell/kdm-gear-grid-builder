<template>
  <div class="modal-container">
    <slot></slot>
  </div>
  <div class="modal-background" />
</template>

<script setup lang="ts">
import { useSideBarSpacingDecorated } from "@/coded-styles";
import { computed, defineProps } from "vue";

interface Props {
  modalWidth: string;
  modalHeight: string;
}

const props = defineProps<Props>();

const computedWidth = computed(() => props.modalWidth);
const computedHeight = computed(() => props.modalHeight);
</script>

<style scoped lang="scss">
.modal-container {
  position: fixed;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  width: v-bind(computedWidth);
  height: v-bind(computedHeight);
  display: flex;
  flex-direction: column;
  gap: v-bind(useSideBarSpacingDecorated);
  padding: v-bind(useSideBarSpacingDecorated);
  border-radius: v-bind(useSideBarSpacingDecorated);
  overflow: auto;
  background-color: $black-1-light;
  z-index: 999;
}

.modal-background {
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $black;
  opacity: 0.5;
}
</style>
