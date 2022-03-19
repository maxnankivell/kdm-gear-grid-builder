<template>
  <div class="category-container" @dragenter.prevent @dragover.prevent @drop.prevent>
    <template v-for="categorySection in categorySections" :key="categorySection">
      <div class="category-section-header-container">
        <div class="category-section-header">
          {{ startCase(categorySection) }}
        </div>
      </div>
      <template v-for="category in categoryStructure[categorySection]" :key="category">
        <ImageAccordion :category="category" :images="imagesByCategory[category] ?? []" />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import gearArray from "../gear-array";
import categoryStructure from "../category-structure";
import ImageAccordion from "./ImageAccordion.vue";
import { useSideBarSpacingDecorated } from "@/coded-styles";
import { startCase } from "lodash";

const categorySections = ref<string[]>(Object.keys(categoryStructure));

const allCategoriesOnGear: string[] = [...new Set(gearArray.flatMap((gear) => gear.categories))];

const allCategoriesInSections: string[] = Object.values(categoryStructure).flat();

// Remove all categories that are not assigned to any gear
for (const categorySection in categoryStructure) {
  categoryStructure[categorySection] = categoryStructure[categorySection].filter((category) =>
    allCategoriesOnGear.includes(category)
  );
}

// Add all categories that are assigned to gear but not in the category structure to miscellaneous
categoryStructure["miscellaneous"] = categoryStructure["miscellaneous"].concat(
  allCategoriesOnGear.filter((category) => !allCategoriesInSections.includes(category))
);

// Put categories in alphabetical order
for (const categorySection in categoryStructure) {
  categoryStructure[categorySection].sort();
}

interface CategoryObject {
  [category: string]: string[];
}

// object with every category as a key to an array of image sources
const imagesByCategory: CategoryObject = reactive({});
for (const category of allCategoriesOnGear) {
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

.category-section-header-container {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid $white;
  text-align: center;
  margin-bottom: 1rem;
}

.category-section-header {
  display: inline-block;
  font-size: 2rem;
  background-color: $black-1-light;
  color: $white;
  padding: 0 8px;
}
</style>
