<template>
  <div class="cards-container">
    <template v-if="activeTodoItems.length !== 0">
      <todoItem
        v-for="item in activeTodoItems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :text="item.text"
        :isDone="item.isDone"
        @switchDoneStatus="switchTodoItemDoneStatus"
        @deleteItem="deleteTodoItem"
        @cardDblClick="editTodoItem"
      />
    </template>
    <template v-else>
      <el-empty
          id="empty-block"
      />
    </template>
  </div>
</template>

<script>
import todoItem from '../components/todo-item.vue'
import { useTodoItemStore } from '../stores/todo-item-store.js'
import { useTodoListStore } from '../stores/todo-list-store.js'

export default {
  name: 'todoItemContainer',
  components: {
    todoItem
  },
  data() {
    return {
      todoItemStore: useTodoItemStore(),
      todoListStore: useTodoListStore()
    }
  },
  computed: {
    todoItems() {
      return this.todoItemStore.items
    },
    activeTodoItems() {
      return this.todoItemStore.getActiveTodoItems(this.todoListStore.activeTodoList)
    }
  },
  methods: {
    deleteTodoItem(id) {
      this.todoItemStore.handleDelete(id)
    },
    editTodoItem(id) {
      this.todoItemStore.handleEdit(id)
    },
    switchTodoItemDoneStatus(id) {
      this.todoItemStore.handleSwitchDoneStatus(id)
    }
  }
}
</script>

<style scoped>
 .cards-container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
 }
  #empty-block {
    cursor: default;
  }
</style>