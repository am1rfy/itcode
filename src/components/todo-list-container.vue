<template>
  <el-menu
      class="el-menu-vertical-demo"
  >
    <todoList
        v-for="(item, index) in todoLists"
        :index="String(index + 1)"
        :key="item.title"
        :title="item.title"
        :is-active="item.isActive"
        @changeActiveTodoList="changeActiveTodoList"
    />
  </el-menu>
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
  .el-menu-vertical-demo {
    border: 0;
  }
</style>