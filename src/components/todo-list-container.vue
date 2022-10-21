<template>
  <div class="todo-lists-bar">
    <ul class="list-group">
      <todoList
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
import todoList from '../components/todo-list.vue'
import { useTodoListStore } from '../stores/todo-list-store.js'

export default {
  name: 'todoListContainer',
  components: {
    todoList
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