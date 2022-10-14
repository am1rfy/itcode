<template>
  <li class="list-group-item"
      :class="{selected: isActive}"
      @click="$emit('activeTodoListChanged', title)"
  >{{ title }}</li>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    title: String,
    isActive: Boolean
  }
}
</script>

<style scoped>
  .list-group-item {
    padding: 25px;
    border: none;

    background-color: var(--bs-body-color);
    color: white;

    font-weight: bolder;
    cursor: pointer;
  }
  .list-group-item:hover {
    background-color: var(--bs-gray-800);
  }
  .selected {
    color: var(--bs-warning);
  }
</style>