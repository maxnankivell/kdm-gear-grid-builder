<template>
  <div
    class="category-container"
    :style="{
      width: imageSize * 2 + useSideBarSpacingRaw * 5 + `px`,
    }"
    @dragenter.prevent
    @dragover.prevent="if ($event.dataTransfer) $event.dataTransfer.dropEffect = 'link';"
    @drop.prevent
  >
    <DropdownWidget v-model="version" :options="['1.5', '1.6']" :allow-multiple-selections="false">
      Game Version:
    </DropdownWidget>
    <DropdownWidget
      v-model="expansions"
      :options="['1', '2', '3', '4', '5', '6', '7', '8', '11', '12', '13', '14', '15', '16', '17', '18']"
      :allow-multiple-selections="true"
    >
      Expansions:
    </DropdownWidget>
    <template v-for="categorySection in categorySections" :key="categorySection">
      <div class="category-section-header-container">
        <div class="category-section-header">
          {{ _.startCase(categorySection) }}
        </div>
      </div>
      <template v-for="category in categoryStructure[categorySection]" :key="category">
        <ImageAccordion :category="category" :images="imagesByCategory[category] ?? []" />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import gearArray from "@/structures/gear-array";
import categoryStructure from "../structures/category-structure";
import ImageAccordion from "./ImageAccordion.vue";
import { useSideBarSpacingDecorated } from "@/coded-styles";
import _ from "lodash";
import DropdownWidget from "./DropdownWidget.vue";
import { useVersionStateStore } from "@/stores/version-state-store";
import { storeToRefs } from "pinia";
import { useImageSize, useSideBarSpacingRaw } from "@/coded-styles";

const { version } = storeToRefs(useVersionStateStore());
const imageSize = useImageSize();
const expansions = ref(["1"]);

const filteredGearArray = computed(() =>
  gearArray.filter((gear) => gear.versions.includes(version.value) || gear.versions.includes(`all`))
);

const categorySections = ref<string[]>(Object.keys(categoryStructure));
const allCategoriesOnGear = computed<string[]>(() => [
  ...new Set(filteredGearArray.value.flatMap((gear) => gear.categories)),
]);
const allCategoriesInSections: string[] = Object.values(categoryStructure).flat();

// Remove all categories that are not assigned to any gear
for (const categorySection in categoryStructure) {
  categoryStructure[categorySection] = categoryStructure[categorySection].filter((category) =>
    allCategoriesOnGear.value.includes(category)
  );
}

// Add all categories that are assigned to gear but not in the category structure to miscellaneous
categoryStructure["miscellaneous"] = categoryStructure["miscellaneous"].concat(
  allCategoriesOnGear.value.filter((category) => !allCategoriesInSections.includes(category))
);

// Put categories in alphabetical order
for (const categorySection in categoryStructure) {
  categoryStructure[categorySection].sort();
}

interface CategoryObject {
  [category: string]: string[];
}

// object with every category as a key to an array of image sources
const imagesByCategory = ref<CategoryObject>({});

watch(
  [filteredGearArray, allCategoriesOnGear],
  () => {
    const tempImagesByCategory: CategoryObject = {};

    for (const category of allCategoriesOnGear.value) {
      for (const gear of filteredGearArray.value) {
        if (gear.categories.includes(category)) {
          if (!tempImagesByCategory[category]) {
            tempImagesByCategory[category] = [];
          }
          tempImagesByCategory[category].push(gear.source);
        }
      }

      tempImagesByCategory[category].sort((a, b) => {
        const aFormatted = a.split("/")[a.split("/").length - 1].split(".")[0].replaceAll("_", " ");
        const bFormatted = b.split("/")[b.split("/").length - 1].split(".")[0].replaceAll("_", " ");
        if ([aFormatted, bFormatted].sort()[0] === aFormatted) {
          return -1;
        } else {
          return 1;
        }
      });
    }

    imagesByCategory.value = tempImagesByCategory;
  },
  { immediate: true }
);
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
