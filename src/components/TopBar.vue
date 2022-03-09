<template>
  <nav class="nav">
    <div class="nav-option right-nav-option" @click="gridState = 'one'">Cycle</div>
    <div class="nav-option right-nav-option" @click="gridState = 'four'">Scroll</div>
    <div class="nav-option left-nav-option" style="margin-left: auto" @click="clearButtonState = true">Clear</div>
    <div class="nav-option left-nav-option save-button">Save Grids</div>
  </nav>
</template>

<script setup lang="ts">
import { useGridStateStore } from "@/grid-state-store";
import { useClearButtonStore } from "@/clear-button-store";
import { storeToRefs } from "pinia";

const { gridState } = storeToRefs(useGridStateStore());
const { clearButtonState } = storeToRefs(useClearButtonStore());
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  background-color: $oxford-blue;
  font-size: 1.6rem;
}

.nav-option {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 2rem 1.2rem;
  color: $white;
  cursor: pointer;
  transition: all 0.4s linear;

  &:hover {
    background-color: $oxford-blue-2-light;
  }
}

.right-nav-option {
  border-right: 2px solid $black;
}

.left-nav-option {
  border-left: 2px solid $black;
}

.save-button {
  border-right: 0 solid $black;
  border-left: 2px solid $black;
  background-color: $orange-web;
  transition: all 0.4s linear;

  &:hover {
    background-color: $orange-web-2-light;
  }
}
</style>
