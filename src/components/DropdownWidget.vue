<template>
  <div style="position: relative">
    <!-- Doesnt work with ssg for some reason but doesnt matter -->
    <!-- <div v-click-away="closePopper" class="dropdown-box" @click="toggle"> -->
    <div class="dropdown-box" @click="toggle" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <div><slot></slot> {{ displayModelValue() }}</div>
      <ph-caret-down :size="32" class="chevron" :class="{ 'rotate-chevron-180': isActive }" />
    </div>
    <Transition name="fade">
      <div v-if="isActive" class="popup-menu">
        <div
          v-for="option in options"
          :key="option"
          class="list-item"
          :class="isSelected(option)"
          @click="updateOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from "vue";
import { PhCaretDown } from "phosphor-vue";

interface Props {
  modelValue: string | string[];
  allowMultipleSelections: boolean;
  options: string[];
}

const emit = defineEmits<{
  (emit: "update:modelValue", newValue: string | string[]): void;
}>();

const props = defineProps<Props>();

const modelValue = computed({
  get: () => props.modelValue,
  set: (newValue: string | string[]) => emit("update:modelValue", newValue),
});

const isActive = ref(false);
const isHovered = ref(false);

function updateOption(option: string) {
  if (!props.allowMultipleSelections || !Array.isArray(modelValue.value)) {
    modelValue.value = option;
    closePopper();
    return;
  }

  const currentIndex = modelValue.value.indexOf(option);
  if (currentIndex === -1) {
    modelValue.value = [...modelValue.value, option];
  } else {
    modelValue.value.splice(currentIndex, 1);
  }
}

function displayModelValue() {
  console.log(modelValue.value);
  if (!props.allowMultipleSelections || !Array.isArray(modelValue.value)) {
    return modelValue.value;
  }
  return modelValue.value.sort().join(", ");
}

function isSelected(option: string) {
  if (!props.allowMultipleSelections || !Array.isArray(modelValue.value)) {
    if (modelValue.value === option) {
      return "selected";
    }
    return;
  }

  if (modelValue.value.includes(option)) {
    return "selected";
  }
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
  display: grid;
  grid-template-columns: 1fr 32px;
  align-items: center;
  padding: 1.2rem;
  font-size: 2rem;
  border: 3px solid $oxford-blue-1-light;
  color: $platinum;
  cursor: pointer;
  transition: all 0.25s linear;
  border-radius: 0.8rem;

  &:hover {
    background-color: $oxford-blue-1-light;
    color: $white;
  }
}

.chevron {
  margin-left: auto;
  transition: transform 0.25s linear;
}

.rotate-chevron-90 {
  transform: rotate(90deg);
}

.rotate-chevron-180 {
  transform: rotate(180deg);
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
  border-radius: 0.8rem;
  &.selected {
    background-color: $cool-green;

    &:hover {
      background-color: $cool-green-2-light;
      color: $white;
    }
  }

  &:hover {
    background-color: $oxford-blue-2-light;
    color: $white;
  }
}
</style>
