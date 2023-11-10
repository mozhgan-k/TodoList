<script lang="ts" setup>
import type { Task } from '../types/type'
const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  (e: 'doneTask'): void
  (e: 'removeTask'): void
}>()

const doneTask = () => {
  emit('doneTask')
}
const removeTask = () => {
  emit('removeTask')
}
</script>

<template>
  <label>
    <input @change="doneTask" type="checkbox" name="checkbox" :value="task.done" />
  </label>
  <div style="width: 97%">{{ props.task.text }}</div>
  <div v-if="props.task.label" class="label" >{{ props.task.label.text }}</div>
  <button
    @click="removeTask"
    class="icon-btn bg-transparent text-negative rg-text action-btn"
  >
    <i class="bi bi-trash"></i>
  </button>
</template>

<style lang="scss" >
@import '../assets/sass/variables.scss';
label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.action-btn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

input[type='checkbox'] {
  cursor: pointer;
  margin-right: 10px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: $primary;
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    background-color: $primary;
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  &:checked::before {
    transform: scale(1);
  }
}

.label{
  // background-color: #553C8B;
  width: auto;
  height: 30px;
  border-radius: 3px;
  vertical-align: middle;
  display: inline-block;
}
</style>