<template>
  <el-menu-item
      @click="$emit('changeActiveTodoList', title)"
      :index="index"
  >
    <el-icon>
      <ArrowRight />
    </el-icon>
    <template #title>
      {{ title }}
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
</style>