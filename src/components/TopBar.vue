<template>
  <div>
    <nav class="nav">
      <div class="nav-option" @click="showClearAllModal = true">Global Clear</div>
      <div class="nav-option save-button" @click="showExportGridModal = true">Export Grids</div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNavBarStateStore } from "@/stores/nav-bar-state-store";

const { showExportGridModal, showClearAllModal } = storeToRefs(useNavBarStateStore());
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: end;
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
  border-left: 2px solid $black;
  cursor: pointer;
  transition: all 0.25s linear;

  &:hover {
    background-color: $oxford-blue-2-light;
  }
}

.save-button {
  border-right: 0 solid $black;
  border-left: 2px solid $black;
  background-color: $orange-web;
  transition: all 0.25s linear;

  &:hover {
    background-color: $orange-web-2-light;
  }
}
</style>
