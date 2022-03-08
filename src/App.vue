<template>
  <div class="page-container">
    <TopBar style="grid-area: header" />
    <CategorySideBar :msg="'Hello Vue 3 + TypeScript + Vite'" style="grid-area: sidebar" />
    <GearGrids :msg="'Hello Vue 3 + TypeScript + Vite'" style="grid-area: gear-grid" />
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
import GearGrids from "@/components/GearGrids.vue";
import CategorySideBar from "@/components/CategorySideBar.vue";
import { ref } from "vue";

const isDragging = ref(false);
</script>

<style scoped lang="scss">
.page-container {
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 40px 1fr;
  grid-template-areas:
    "header header"
    "sidebar gear-grid";
}
</style>
