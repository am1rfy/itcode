<template>
  <el-menu-item
      @click="$emit('changeActiveTodoList', title)"
      :index="index"
      class="list-item"
  >
    <el-icon size="16px">
      <ArrowRight />
    </el-icon>
    <template #title>
      <p id="title">{{ title }}</p>
    </template>
  </el-menu-item>
</template>

<script>
export default {
  name: 'todoList',
  props: {
    index: String,
    title: String,
    isActive: Boolean
  },
}
</script>

<style scoped>
  #title {
    font-size: 16px;
  }
  .list-item {
    height: 75px;
  }
</style>