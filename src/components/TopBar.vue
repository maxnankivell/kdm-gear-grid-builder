<template>
  <div>
    <nav class="nav">
      <div class="nav-option right-nav-option" @click="gridState = 'one'">Cycle</div>
      <div class="nav-option right-nav-option" @click="gridState = 'four'">Scroll</div>
      <div class="nav-option left-nav-option" style="margin-left: auto" @click="showModal = true">Clear</div>
      <div class="nav-option left-nav-option save-button">Save Grids</div>
    </nav>
    <ModalWindow v-if="showModal">
      <div class="modal">
        <h2 style="grid-area: header">Confirm</h2>
        <p style="grid-area: paragraph">Are you sure you want to clear ALL grids?</p>
        <button style="grid-area: yes" @click="onYes">Yes</button>
        <button style="grid-area: no" @click="showModal = false">No</button>
      </div>
    </ModalWindow>
  </div>
</template>

<script setup lang="ts">
import { useGridStateStore } from "@/grid-state-store";
import { useClearButtonStore } from "@/clear-button-store";
import { storeToRefs } from "pinia";
import { useSideBarSpacingDecorated } from "@/coded-styles";
import ModalWindow from "@/components/ModalWindow.vue";
import { ref } from "vue";

const { gridState } = storeToRefs(useGridStateStore());
const { clearButtonState } = storeToRefs(useClearButtonStore());

const showModal = ref(false);

function onYes() {
  clearButtonState.value = true;
  showModal.value = false;
}
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

.modal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: v-bind(useSideBarSpacingDecorated);
  grid-template-areas:
    "header header"
    "paragraph paragraph"
    "yes no";
}
</style>
