<template>
  <div class="labels-bar">
    <ul class="list-group">
      <LabelItem
          v-for="item in labels"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :is-selected="item.isSelected"
          @selectedLabelChanged="selectedLabelChanged"
      />
    </ul>
  </div>
</template>

<script>
import LabelItem from './LabelItem'

export default {
  name: 'LabelsContainer',
  components: {
    LabelItem
  },
  data() {
    return {
      labels: [
        {id: 1, title: 'All', cardsIds: [1, 2, 3, 4, 5], isSelected: false},
        {id: 2, title: 'Label1', cardsIds: [1, 2], isSelected: false},
        {id: 3, title: 'Label2', cardsIds: [4], isSelected: false},
        {id: 4, title: 'Label3', cardsIds: [], isSelected: false},
        {id: 5, title: 'Label4', cardsIds: [3], isSelected: false},
        {id: 6, title: 'Trash', cardsIds: [], isSelected: false},
      ],
    }
  },
  methods: {
    selectedLabelChanged(id) {
      this.labels.forEach(item => {
        if (item.id === id) {
          item.isSelected = true
          this.$emit('selectedLabelChanged', item.cardsIds)
        } else {
          item.isSelected = false
        }
      })
    }
  },
  mounted() {
    this.selectedLabelChanged(this.labels[0].id)
  }
}
</script>

<style scoped>
  .labels-bar {
    padding: 0 10px 0 10px;
    width: 22.6%;

    float: left;
  }
</style>