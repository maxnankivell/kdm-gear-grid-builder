<template>
  <div class="page-container">
    <TopBar style="grid-area: header" />
    <CategorySideBar style="grid-area: sidebar" />
    <GearGrids style="grid-area: gear-grid" />
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
import GearGrids from "@/components/GearGrids.vue";
import CategorySideBar from "@/components/CategorySideBar.vue";
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
