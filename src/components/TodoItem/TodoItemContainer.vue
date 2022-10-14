<template>
  <div class="cards-container" :style="activeTodoItemsExist">
    <template v-if="activeTodoItems.length !== 0">
      <TodoItem
        v-for="item in activeTodoItems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :text="item.text"
        @markTodoItemAsChecked="markTodoItemAsChecked"
      />
    </template>
    <template v-else>
      <div class="todo-list-is-empty">This tag is now Empty</div>
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
  computed: {
    todoItems() {
      return this.todoItemStore.items
    },
    activeTodoItems() {
      return this.todoItemStore.activeTodoItems
    },
    activeTodoItemsExist() {
      return this.activeTodoItems.length !== 0 ? { justifyContent: 'initial', textAlign: 'initial' } : { justifyContent: 'center', textAlign: 'center' }
    }
  },
  methods: {
    markTodoItemAsChecked(id) {
      this.todoItemStore.check(id)
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