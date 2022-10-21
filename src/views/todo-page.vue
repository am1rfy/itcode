<template>
  <todoHeader/>
  <div class="main-container">
    <todoListContainer/>
    <todoItemContainer/>
  </div>
</template>

<script>
import todoHeader from '../components/todo-header.vue'
import todoListContainer from '../components/todo-list-container.vue'
import todoItemContainer from '../components/todo-item-container.vue'

import { useTodoListStore } from '../stores/todo-list-store.js'

export default {
  name: 'todoPage',
  components: {
    todoHeader,
    todoListContainer,
    todoItemContainer
  },
  props: {
    activeTodoListName: String
  },
  data() {
    return {
      todoListStore: useTodoListStore()
    }
  },
  created() {
    this.todoListStore.setActiveTodoList(this.activeTodoListName)
  }
}
</script>

<style scoped>
  .main-container {
    margin-top: 16px;
  }
</style>
