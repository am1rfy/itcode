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
import { useLabelStore } from '@/stores/labelStore'

export default {
  name: 'LabelsContainer',
  components: {
    LabelItem
  },
  props: {
    activeLabelName: String
  },
  data() {
    return {
      labels: useLabelStore().getItems
    }
  },
  methods: {
    selectedLabelChanged(id) {
      this.labels.forEach(item => {
        if (item.id === id) {
          item.isSelected = true
          this.$emit('selectedLabelChanged', item.id, item.title, item.cardsIds)
          this.$router.push(`/label/${item.title}`)
        } else {
          item.isSelected = false
        }
      })
    }
  },
  created() {
    this.selectedLabelChanged(this.labels[0].id)
    this.labels.forEach(item => {
      if (this.activeLabelName && item.title.toLowerCase() === this.activeLabelName.toLowerCase()) {
        this.selectedLabelChanged(item.id)
      }
    })
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