<template>
  <HeaderComponent
    :active-todo-list-name="activeTodoListName"
  />
  <div class="main-container">
    <TodoListContainer
        @activeTodoListChanged="activeTodoListChanged"
        :active-todo-list-name="activeTodoListName"
    />
    <TodoItemContainer
        :active-todo-list-info="activeTodoListInfo"
    />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import TodoListContainer from '@/components/TodoList/TodoListContainer'
import TodoItemContainer from '@/components/TodoItem/TodoItemContainer'

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
      activeTodoListInfo: {
        title: String,
        todoItemsIds: Array
      }
    }
  },
  methods: {
    activeTodoListChanged(title, todoItemsIds) {
      [this.activeTodoListInfo.title, this.activeTodoListInfo.todoItemsIds] = [title, todoItemsIds]
    }
  }
}
</script>

<style scoped>
  .main-container {
    margin-top: 16px;
  }
</style>
