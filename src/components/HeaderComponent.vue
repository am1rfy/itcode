<template>
  <el-menu
      :default-active="activeIndex"
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
          @click="userStore.handleLogout()"
      >Sign out
      </el-menu-item>

    </el-sub-menu>

  </el-menu>
</template>

<script>
import { useTodoItemStore } from '@/stores/todoItemStore'
import { useTodoListStore } from '@/stores/todoListStore'
import { useUserStore } from '@/stores/userStore'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      userStore: useUserStore(),
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
      this.todoItemStore.create({
        title: 'New note',
        text: 'this note is unique'
      })
    },
    editTodoLists() {
      // TODO
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