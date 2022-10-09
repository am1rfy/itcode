<template>
  <div class="labels-bar">
    <ul class="list-group">
      <LabelItem
          v-for="item in labels"
          :key="item.title"
          :title="item.title"
          :is-selected="item.isSelected"
          @selectedLabelChanged="selectedLabelChanged"
      />
    </ul>
  </div>
</template>

<script>
import LabelItem from '@/components/LabelsContainer/LabelItem'
import { useLabelStore } from '@/stores/labelStore'
import { useNoteStore } from "@/stores/noteStore";

export default {
  name: 'LabelsContainer',
  components: {
    LabelItem
  },
  props: {
    activeLabelName: String
  },
  data: function () {
    return {
      userLabels: useLabelStore().getItems,
      staticLabels: {
        all: {title: 'All', cardsIds: [], isSelected: false},
        trash: {title: 'Trash', cardsIds: [], isSelected: false},
        checked: {title: 'Checked', cardsIds: [], isSelected: false}
      }
    }
  },
  computed: {
    labels() {
      return [this.staticLabels.all].concat(
          this.userLabels,
          [this.staticLabels.trash],
          [this.staticLabels.checked]
      )
    }
  },
  methods: {
    selectedLabelChanged(title) {
      this.labels.forEach(item => {
        if (item.title === title) {
          item.isSelected = true
          this.$emit('selectedLabelChanged', item.title, item.cardsIds)
          this.$router.push(`/label/${item.title}`)
        } else {
          item.isSelected = false
        }
      })
    }
  },
  created() {
    // Загрузка записей в статичные ярлыки
    useNoteStore().getItems.forEach(item => {
      if (item.checked) this.staticLabels.checked.cardsIds.push(item.id)
      else if (item.deleted) this.staticLabels.trash.cardsIds.push(item.id)
      else this.staticLabels.all.cardsIds.push(item.id)
    })

    // Выбранный по умолчанию ярлык при загрузке страницы
    this.selectedLabelChanged(this.staticLabels.all.title)
    this.labels.forEach(item => {
      if (this.activeLabelName && item.title.toLowerCase() === this.activeLabelName.toLowerCase()) {
        this.selectedLabelChanged(item.title)
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