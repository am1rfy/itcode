<template>
  <HeaderComponent/>
  <div class="main-container">
    <LabelsContainer
        @selectedLabelChanged="selectedLabelChanged"
        :active-label-name="activeLabelName"
    />
    <CardsContainer :active-label-info="activeLabelInfo"/>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import LabelsContainer from '../components/LabelsContainer/LabelsContainer.vue'
import CardsContainer from '../components/CardsContainer/CardsContainer.vue'

export default {
  name: 'TodoPage',
  components: {
    HeaderComponent,
    LabelsContainer,
    CardsContainer
  },
  props: {
    activeLabelName: String
  },
  data() {
    return {
      activeLabelInfo: {
        id: Number,
        title: String,
        cardsIds: Array
      },
    }
  },
  methods: {
    selectedLabelChanged(id, title, cardsIds) {
      [this.activeLabelInfo.id, this.activeLabelInfo.title, this.activeLabelInfo.cardsIds] = [id, title, cardsIds]
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: 16px;
}
</style>
