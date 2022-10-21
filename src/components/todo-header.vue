<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
  >
    <el-menu-item index="1">
      <el-icon size="58px">
        <Management />
      </el-icon>
      <p id="logo">NOTES</p>
    </el-menu-item>

    <div class="flex-grow" />

    <el-tooltip
        class="box-item"
        effect="light"
        content="Edit tags"
        placement="bottom"
        :show-after="200"
        :hide-after="0"
        :visible-arrow="false"
        :offset="6"
    >
      <el-menu-item
          index="2"
          @click="editTodoLists"
      >
        <el-icon size="58px">
          <EditPen />
        </el-icon>
      </el-menu-item>
    </el-tooltip>

    <el-tooltip
        class="box-item"
        effect="light"
        content="Create note"
        placement="bottom"
        :show-after="200"
        :hide-after="0"
        :visible-arrow="false"
        :offset="6"
    >
      <el-menu-item
          index="3"
          v-show="!activeTodoListIsDefault"
          @click="createTodoItem"
      >
        <el-icon size="58px">
          <Plus />
        </el-icon>
      </el-menu-item>
    </el-tooltip>

    <el-sub-menu index="4">
      <template #title>
        <el-icon size="58px">
          <Menu />
        </el-icon>
      </template>

      <el-menu-item
          index="4-1"
          @click="$router.push('/settings/')"
      >Settings
      </el-menu-item>

      <el-menu-item
          index="4-2"
          @click="logout"
      >Sign out
      </el-menu-item>

    </el-sub-menu>

  </el-menu>
</template>

<script>
import { useTodoItemStore } from '../stores/todo-item-store.js'
import { useTodoListStore } from '../stores/todo-list-store.js'
import { useAuthStore } from '../stores/auth-store.js'

export default {
  name: 'todoHeader',
  data() {
    return {
      authStore: useAuthStore(),
      todoItemStore: useTodoItemStore(),
      todoListStore: useTodoListStore()
    }
  },
  computed: {
    activeTodoListIsDefault() {
      return this.todoListStore.activeTodoList.isDefault
    }
  },
  methods: {
    createTodoItem() {
      this.todoItemStore.handleCreate({
        activeTodoListTitle: this.todoListStore.activeTodoList.title,
        title: 'New note',
        text: 'this note is unique'
      })
    },
    editTodoLists() {
      // TODO
    },
    logout() {
      this.authStore.handleLogout()
      this.$router.push('/sign-in')
    }
  }
}
</script>

<style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  .box-item {
    width: 110px;
    margin-top: 10px;
  }
  #logo {
    font-size: large;
  }
</style>