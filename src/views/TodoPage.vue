<template>
    <div class="common-layout">
      <el-container>

        <el-header>
          <HeaderComponent/>
        </el-header>

        <el-container>

          <el-aside width="200px">
            <TodoListContainer/>
          </el-aside>

          <el-main>
            <TodoItemContainer/>
          </el-main>

        </el-container>
      </el-container>
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

</style>
