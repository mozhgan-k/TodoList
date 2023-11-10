<script setup lang="ts">
import type {Task} from '../types/type'
import { ref } from 'vue'
import TheListItems from './TheListItems.vue';
import TheInput from './TheInput.vue';
import { useStore } from '@/stores/storeTodoList';

const store = useStore()

let taskList = ref<Task[]>([])

let textarea = ref('')

const userTask = localStorage.getItem('tasks')

const getText = (text: string) => {
  textarea.value = text
}

if (userTask) {
  taskList.value = JSON.parse(userTask)
}

const addTask = () => {
  if (textarea.value !== '') {
    const task: Task = {
      id: taskList.value.length + 1,
      done: false,
      text: textarea.value
    }
    if(store.$state.modal.data) {
      task.label = store.$state.modal.data
    }
    taskList.value.push(task)
    localStorage.setItem('tasks', JSON.stringify(taskList.value))
    textarea.value = ''
  }
}

function doneTask (task: Task) {
  const find = taskList.value.findIndex((t: Task) => t.id === task.id)
  if (task.done) {
    if (find !== -1) {
      task.done = false
    }
  } else {
    if (find !== -1) {
      task.done = true
    }
  }
  localStorage.setItem('tasks', JSON.stringify(taskList.value))
}

const removeTask = (task: Task) => {
  const find = taskList.value.findIndex((t: Task) => t.id === task.id)
  if (find !== -1) {
    taskList.value.splice(find, 1)
    localStorage.setItem('tasks', JSON.stringify(taskList.value))
  }
}
</script>

<template>
  <div class="card">
    <!-- <div class="rg-text" style="margin-bottom: 10px">Name</div> -->
    <div class="scroll-area">
      <ul>
        <li
        style="posittion: relative"
          v-for="(task, i) in taskList"
          :key="i"
          :class="task.done ? 'line-through bg-background text-disable' : 'bg-secondary'"
        >
          <TheListItems :task="task" @doneTask="doneTask(task)" @removeTask="removeTask(task)"/>
        </li>
      </ul>
    </div>
    <TheInput @addTask="addTask" @text="getText"/>
    <div class="btn-container">
      <button @click="addTask" class="button bg-primary text-dark font-700">ADD</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.card {
  padding: 15px;
  max-width: 400px;
  width: 100%;
  margin-inline: auto;

  ul li {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: $sm_radius;
  display: flex;
  align-items: center;
  position: relative;
  }
  .btn-container {
    width: 100%;
    margin-top: 10px;
    button {
      background-color: $accent;
    }
  }
}
</style>
