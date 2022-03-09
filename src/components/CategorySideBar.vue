<template>
  <div class="category-container" @dragenter.prevent @dragover.prevent @drop.prevent>
    <template v-for="category in categories" :key="category">
      <ImageAccordion :category="category" :images="imagesByCategory[category]" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import gearArray from "../gear-array";
import ImageAccordion from "./ImageAccordion.vue";
import { useSideBarSpacingDecorated } from "@/coded-styles";

const categories = ref<string[]>([]);
for (const gear of gearArray) {
  for (const category of gear.categories) {
    if (!categories.value.includes(category)) {
      categories.value.push(category);
    }
  }
}

interface CategoryObject {
  [category: string]: string[];
}

const imagesByCategory: CategoryObject = reactive({});
for (const category of categories.value) {
  for (const gear of gearArray) {
    if (gear.categories.includes(category)) {
      if (!imagesByCategory[category]) {
        imagesByCategory[category] = [];
      }
      imagesByCategory[category].push(gear.source);
    }
  }
}
</script>

<style scoped lang="scss">
.category-container {
  display: flex;
  flex-direction: column;
  gap: v-bind(useSideBarSpacingDecorated);
  padding: v-bind(useSideBarSpacingDecorated);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: $black-1-light;
}
</style>
