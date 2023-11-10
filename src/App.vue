<script setup lang="ts">
import TheCard from "./components/TheCard.vue";
import TheLabelModal from "./components/TheLabelModal.vue";
import { useStore } from "./stores/storeTodoList";

const store = useStore()

const modal = store.$state.modal
</script>

<template>
  <main style="padding: 24px; height: 100%">
    <TheCard/>
  </main>

  <div class="overlay" v-if="modal.value && modal.type === 'addLable'">
    <TheLabelModal/>
  </div>
</template>

