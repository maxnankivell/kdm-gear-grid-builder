<template>
  <nav class="nav">
    <div class="nav-option" @click="gridState = 'one'">Cycle</div>
    <div class="nav-option" @click="gridState = 'four'">Scroll</div>
    <div class="nav-option save-button">Save Grids</div>
  </nav>
</template>

<script setup lang="ts">
import { useGridStateStore } from "@/grid-state-store";
import { storeToRefs } from "pinia";

const { gridState } = storeToRefs(useGridStateStore());
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  background-color: $oxford-blue;
  font-size: 1.2rem;
}

.nav-option {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 2rem 1.2rem;
  border-right: 2px solid $black;
  color: $white;
  cursor: pointer;

  &:hover {
    background-color: $oxford-blue-2-light;
  }
}

.save-button {
  margin-left: auto;
  border-right: 0 solid $black;
  border-left: 2px solid $black;
  background-color: $orange-web;
  &:hover {
    background-color: $orange-web-2-light;
  }
}
</style>
