<script lang="ts" setup>
import { useStore } from '@/stores/storeTodoList';
import { ref } from 'vue'
let text = ref('')


let addLabel = ref(false)

const emit = defineEmits<{
  (e: 'addTask'): void
  (e: 'text', val: string): string
}>()

const insertText = () => {
  emit('text', text.value)
  text.value = ''
}

const store = useStore()

const insertLabel = () => {
  debugger
  store.set_modal({type: 'addLable', value: true})
}
</script>

<template>
  <div class="inp-container">
    <div>
      <textarea @change="insertText" v-model="text" type="text"></textarea>
    </div>
    <div>
      <div class="actions-container">
        <button @click="insertLabel" class="icon-btn bg-background text-dark rg-text">
          <i class="bi bi-tag-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/sass/variables.scss';
.inp-container {
  width: 100%;
  height: 90px;
  border: 1px solid #eee;
  border-radius: $sm_radius;
  padding: 10px;
  display: grid;
  grid-template-columns: 290px 50px;
  align-self: center;
  textarea {
    outline: none;
    border: none;
    resize: none;
    width: 90%;
    height: 65px;
    line-height: 22px;
    color: $dark_texts;
    margin-right: 5px;
  }
  .actions-container {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
}
</style>
