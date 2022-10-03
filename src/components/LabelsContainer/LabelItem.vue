<template>
  <li class="list-group-item"
      :class="{selected: isSelected}"
      @click="$emit('selectedLabelChanged', id)"
  >{{ title }}</li>
</template>

<script>
export default {
  name: "LabelItem",
  props: {
    id: Number,
    title: String,
    isSelected: Boolean
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