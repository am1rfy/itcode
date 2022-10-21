<template>
  <el-scrollbar>
    <div class="common-layout">
      <el-container>

        <el-header id="header">
          <todoHeader/>
        </el-header>

        <el-container>

          <el-aside id="aside" width="300px">
            <todoListContainer/>
          </el-aside>

          <el-main id="main">
            <todoItemContainer/>
          </el-main>

        </el-container>
      </el-container>
    </div>
  </el-scrollbar>
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
    border-bottom: solid 1px var(--el-menu-border-color)
  }
  #aside {
    margin-top: 20px;
  }
</style>
