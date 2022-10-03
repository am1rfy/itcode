<template>
  <div class="side-bar">
    <ul class="list-group">
      <li class="list-group-item"
          v-for="label in labels"
          :class="{selected: label.isSelected}"
          @click="select(label.id)"
          :key="label.id"
          :id="label.id"
      >{{ label.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LabelsComponent',
  data() {
    return {
      labels: [
        {id: 1, title: 'Label1', cardsIds: [1, 2], isSelected: false},
        {id: 2, title: 'Label2', cardsIds: [4], isSelected: false},
        {id: 3, title: 'Label3', cardsIds: [], isSelected: false},
        {id: 4, title: 'Label4', cardsIds: [3], isSelected: false},
        {id: 5, title: 'Label5', cardsIds: [], isSelected: false},
      ],
    }
  },
  methods: {
    select(id) {
      this.labels.forEach(label => {
        if (label.id === id) {
          label.isSelected = true
          this.$emit('selectedLabelChanged', label.cardsIds)
        } else {
          label.isSelected = false
        }
      })
    }
  },
  mounted() {
    this.select(this.labels[0].id)
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