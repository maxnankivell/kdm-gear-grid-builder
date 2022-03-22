<template>
  <div>
    <nav class="nav">
      <div class="nav-option" @click="showModal = true">Global Clear</div>
      <div class="nav-option save-button" @click="showExportGridModal = true">Export Grids</div>
    </nav>
    <ModalWindow v-if="showModal" :width="'420px'" :height="'220px'">
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
import { useClearButtonStore } from "@/clear-button-store";
import { storeToRefs } from "pinia";
import { useSideBarSpacingDecorated } from "@/coded-styles";
import ModalWindow from "@/components/ModalWindow.vue";
import { ref } from "vue";
import { useNavBarStateStore } from "@/nav-bar-state-store";

const { showExportGridModal } = storeToRefs(useNavBarStateStore());
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
