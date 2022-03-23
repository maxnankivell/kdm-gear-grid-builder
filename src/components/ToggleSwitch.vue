<template>
  <div>
    <span
      class="toggle-wrapper"
      :class="backgroundStyles"
      role="checkbox"
      :aria-checked="toggleValue"
      tabindex="0"
      @click="toggleValue = !toggleValue"
      @keydown.space.prevent="toggleValue = !toggleValue"
    >
      <span class="toggle-indicator" :style="indicatorStyles" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

interface Props {
  modelValue: boolean;
}

const emit = defineEmits<{
  (emit: "update:modelValue", newValue: boolean): void;
}>();

const props = defineProps<Props>();

const toggleValue = computed({
  get: () => props.modelValue,
  set: (newValue: boolean) => emit("update:modelValue", newValue),
});

const backgroundStyles = computed(() => {
  return {
    "web-orange": toggleValue.value,
    "oxford-blue": !toggleValue.value,
  };
});
const indicatorStyles = computed(() => {
  return {
    transform: toggleValue.value ? "translateX(14px)" : "translateX(0)",
  };
});
</script>

<style scoped lang="scss">
.web-orange {
  background-color: $orange-web;

  &:hover {
    background-color: $orange-web-2-light;
  }
}

.oxford-blue {
  background-color: $oxford-blue;

  &:hover {
    background-color: $oxford-blue-2-light;
  }
}

.toggle-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 18px;
  border-radius: 9999px;
  transition: background-color 0.25s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toggle-wrapper:focus {
  outline: 0;
}

.toggle-indicator {
  position: absolute;
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease;
}
</style>
