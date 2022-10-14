<template>
  <HeaderComponent/>
  <div class="main-container">
    <TodoListContainer/>
    <TodoItemContainer/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import TodoListContainer from '@/components/TodoList/TodoListContainer'
import TodoItemContainer from '@/components/TodoItem/TodoItemContainer'
import { useTodoListStore } from '@/stores/todoListStore'

export default {
  name: 'TodoPage',
  components: {
    HeaderComponent,
    TodoListContainer,
    TodoItemContainer
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
