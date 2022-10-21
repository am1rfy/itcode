<template>
    <div class="common-layout">
      <el-container>

        <el-header id="header">
          <todoHeader/>
        </el-header>

        <el-container>

          <el-aside width="200px">
            <todoListContainer/>
          </el-aside>

          <el-main>
            <todoItemContainer/>
          </el-main>

        </el-container>
      </el-container>
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
  #header {
    padding: 0;
  }
</style>
