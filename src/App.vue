<template>
    <HeaderComponent/>
    <div class="main-container">
      <LabelsContainer @selectedLabelChanged="selectedLabelChanged"/>
      <CardsContainer :active-label-info="activeLabelInfo"/>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import LabelsContainer from './components/LabelsContainer/LabelsContainer.vue'
import CardsContainer from './components/CardsContainer/CardsContainer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LabelsContainer,
    CardsContainer
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

<style>
  .main-container {
    margin-top: 16px;
  }
</style>
