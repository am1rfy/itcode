<template>
  <div class="todo-lists-bar">
    <ul class="list-group">
      <TodoList
          v-for="item in todoLists"
          :key="item.title"
          :title="item.title"
          :is-active="item.isActive"
          @activeTodoListChanged="activeTodoListChanged"
      />
    </ul>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList/TodoList'
import { useTodoListStore } from '@/stores/todoListStore'
import { useTodoItemStore } from '@/stores/todoItemStore'

export default {
  name: 'TodoListContainer',
  components: {
    TodoList
  },
  props: {
    activeTodoListName: String
  },
  data() {
    return {
      todoListStore: useTodoListStore(),
      todoItemStore: useTodoItemStore(),
      defaultTodoLists: {
        all: {title: 'All', todoItemsIds: [], isActive: false},
        trash: {title: 'Trash', todoItemsIds: [], isActive: false},
        checked: {title: 'Checked', todoItemsIds: [], isActive: false}
      }
    }
  },
  watch: {
    'todoListStore': {
      handler: 'loadTodoItemsIds',
      deep: true
    }
  },
  computed: {
    userTodoLists() {
      return this.todoListStore.items
    },
    todoLists() {
      return [this.defaultTodoLists.all].concat(
          this.userTodoLists,
          [this.defaultTodoLists.trash],
          [this.defaultTodoLists.checked]
      )
    },
    todoItems() {
      return this.todoItemStore.items
    }
  },
  methods: {
    activeTodoListChanged(title) {
      this.todoLists.forEach(item => {
        item.isActive = false
        if (item.title === title) {
          item.isActive = true
          this.$emit('activeTodoListChanged', item.title, item.todoItemsIds)
          this.$router.push(`/label/${item.title}`)
        }
      })
    },
    // Загрузка id записей в статичные ярлыки
    loadTodoItemsIds() {
      this.todoItems.forEach(item => {
        if (item.checked)
          this.defaultTodoLists.checked.todoItemsIds.push(item.id)
        else if (item.deleted)
          this.defaultTodoLists.trash.todoItemsIds.push(item.id)
        else
          this.defaultTodoLists.all.todoItemsIds.push(item.id)
      })
    }
  },
  created() {
    this.loadTodoItemsIds()

    // Выбранный по умолчанию ярлык при загрузке страницы
    this.activeTodoListChanged(this.defaultTodoLists.all.title)
    this.todoLists.forEach(item => {
      if (this.activeTodoListName && item.title.toLowerCase() === this.activeTodoListName.toLowerCase()) {
        this.activeTodoListChanged(item.title)
      }
    })
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