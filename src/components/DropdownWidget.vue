<template>
  <div style="position: relative">
    <div v-click-away="closePopper" class="dropdown-box" @click="toggle">
      <div>Game Version: {{ modelValue }}</div>
      <ph-caret-down :size="32" class="chevron" :class="{ 'rotate-chevron-180': isActive }" />
    </div>
    <Transition name="fade">
      <div v-if="isActive" class="popup-menu">
        <div v-for="version in versions" :key="version" class="list-item" @click="updateVersion(version)">
          {{ version }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from "vue";
import { PhCaretDown } from "phosphor-vue";

interface Props {
  modelValue: number;
  versions: number[];
}

const emit = defineEmits<{
  (emit: "update:modelValue", newValue: number): void;
}>();

const props = defineProps<Props>();

const modelValue = computed({
  get: () => props.modelValue,
  set: (newValue: number) => emit("update:modelValue", newValue),
});

const isActive = ref(false);

function updateVersion(version: number) {
  modelValue.value = version;
}

function closePopper() {
  isActive.value = false;
}

function toggle() {
  isActive.value = !isActive.value;
}
</script>

<style scoped lang="scss">
.dropdown-box {
  display: flex;
  align-items: center;
  padding: 1.2rem;
  font-size: 2rem;
  background-color: $oxford-blue;
  color: $platinum;
  cursor: pointer;
  transition: all 0.25s linear;
  border-radius: 0.8rem;

  &:hover {
    background-color: $oxford-blue-2-light;
    color: $white;
  }
}

.chevron {
  margin-left: auto;
  transition: transform 0.25s linear;
}

.popup-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  margin-top: 0.8rem;
  background-color: $oxford-blue-1-light;
  z-index: 10;
  border-radius: 0.8rem;
}

.list-item {
  padding: 1.2rem 0;
  font-size: 2rem;
  color: $platinum;
  cursor: pointer;

  &:hover {
    background-color: $oxford-blue-3-light;
    color: $white;
    border-radius: 0.8rem;
  }
}
</style>
