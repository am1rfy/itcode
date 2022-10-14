<template>
  <div class="todo-lists-bar">
    <ul class="list-group">
      <TodoList
          v-for="item in todoLists"
          :key="item.title"
          :title="item.title"
          :is-active="item.isActive"
          @changeActiveTodoList="changeActiveTodoList"
      />
    </ul>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList/TodoList'
import { useTodoListStore } from '@/stores/todoListStore'

export default {
  name: 'TodoListContainer',
  components: {
    TodoList
  },
  data() {
    return {
      todoListStore: useTodoListStore()
    }
  },
  computed: {
    todoLists() {
      return this.todoListStore.items
    }
  },
  methods: {
    changeActiveTodoList(title) {
      this.todoListStore.setActiveTodoList(title)
      this.$router.push(`/tags/${title}`)
    }
  }
}
</script>

<style scoped>
  .todo-lists-bar {
    padding: 0 10px 0 10px;
    width: 22.6%;

    float: left;
  }
</style>