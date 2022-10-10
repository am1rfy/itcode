<template>
  <div class="cards-container" :style="activeTodoListIsEmpty">
    <template v-if="activeTodoListInfo.todoItemsIds.length !== 0">
      <TodoItem
        v-for="item in activeTodoItems"
        :key="item.id"
        :todoItem="item"
      />
    </template>
    <template v-else>
      <div class="todo-list-is-empty">
        "{{activeTodoListInfo.title}}" is now empty
      </div>
    </template>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem/TodoItem'
import { useTodoItemStore } from '@/stores/todoItemStore'

export default {
  name: 'TodoItemContainer',
  components: {
    TodoItem
  },
  data() {
    return {
      todoItemStore: useTodoItemStore()
    }
  },
  props: {
    activeTodoListInfo: {
      title: String,
      todoItemsIds: Array
    }
  },
  computed: {
    todoItems() {
      return this.todoItemStore.items
    },
    activeTodoItems() {
      return this.todoItems.filter(item => this.activeTodoListInfo.todoItemsIds.includes(item.id))
    },
    activeTodoListIsEmpty() {
      return this.activeTodoListInfo.todoItemsIds.length === 0 ? { justifyContent: 'center', textAlign: 'center' } : { justifyContent: 'initial', textAlign: 'initial' }
    }
  }
}
</script>

<style scoped>
  .cards-container {
    margin-left: 5vh;
    display: flex;
    flex-wrap: wrap;
  }
  .todo-list-is-empty {
    color: var(--bs-gray-600);

    font-weight: 400;
    font-size: 1.375rem;

    letter-spacing: 0;
    line-height: 1.75rem;

    cursor: default;
  }
</style>