<template>
  <div class="side-bar">
    <ul class="list-group">
      <li class="list-group-item" :class="{selected: label.isSelected}" @click="select" v-for="label in labels" :key="label.id" :id="label.id">{{ label.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      labels: [
        {id: 1, title: 'Label1', isSelected: false},
        {id: 2, title: 'Label2', isSelected: false},
        {id: 3, title: 'Label3', isSelected: false},
        {id: 4, title: 'Label4', isSelected: false},
        {id: 5, title: 'Label5', isSelected: false},
      ]
    }
  },
  methods: {
    select(e) {
      this.labels.forEach(label => {
        label.id == e.target.id ? label.isSelected = true : label.isSelected = false
      })
    }
  }
}
</script>

<style scoped>
  .side-bar {
    padding: 0 10px 0 10px;
    width: 22.6%;

    float: left;
  }
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
    /*color: var(--bs-warning);*/
  }
  .selected {
    color: var(--bs-warning);
  }
</style>