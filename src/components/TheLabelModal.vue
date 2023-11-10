<script setup lang="ts">
import { useStore } from '@/stores/storeTodoList';
import type { Label } from '../types/type'
import { ref } from "vue";

let colors = ['#E5FDFF', '#FCFCD4','#F4EEFF', '#212121', '#C47C96', '#6CE5D5', '#B6A6B5', '#FF8787', '#FFC898',
  '#C9848B', '#C6AD98', '#49C087', '#886284', '#874C65', '#B8F592', '#F9F871', '#87ECB5', '#D45079', '#553C8B', '#4B1E19']

let showPalette = ref(false)

let tag = ref('')

let colorName = ref('')

let label = ref<Label>({
  text: tag.value,
  color: colorName.value
})


const setColor = (color: string) => {
  colorName.value = color
  showPalette.value = false
}

const store = useStore()

const addLabels = () => {
  store.set_modal({type: 'addLable', value: false, data: label})
}

</script>

<template>
  <div class="card">
    <div class="title-section">
      <span>Add label</span>
    </div>
    <div class="input-container">
      <input v-model="tag" placeholder="Ex: important, work, ...">
      <div style="position: relative">
        <button @click.exact="showPalette = !showPalette" class="icon-btn bg-background text-dark rg-text" style="margin-bottom: 5px">
        <i class="bi bi-palette"></i>
      </button>
        <div class="color-palette" v-if="showPalette">
          <div v-for="color in colors" :key="color">
            <button @click.exact="setColor(color)" :style="{ 'background-color': color }">{{ color }}</button>
          </div>
        </div>
      </div>
    </div>
    <div style="padding: 5px">
      <button @click="addLabels" class="button">ADD</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 10px;
}

.title-section {
  padding: 5px;
}

.input-container {
  padding: 5px;
  display: grid;
  grid-template-columns: 85% 25%;
  align-items: center;
  margin-bottom: 10px;

  button {
    margin-left: 10px;
  }
}


.color-palette {
  width: 210px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  display: grid;
  align-items: center;
  justify-content: center;
  justify-self: center;
  grid-template-columns: repeat(5, 30px);
  grid-gap: 10px;
  position: absolute;
  bottom: -147px;
  z-index: 10;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 3px 5px;
    color: transparent;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-inline: auto;
  }
}
</style>
