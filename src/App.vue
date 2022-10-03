<template>
    <HeaderComponent/>
    <div class="main-container">
      <LabelsContainer @selectedLabelChanged="selectedLabelChanged"/>
      <CardsContainer :active-cards-ids="activeCardsIds"/>
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
      activeCardsIds: [],
    }
  },
  methods: {
    selectedLabelChanged(cardsIds) {
      this.activeCardsIds = cardsIds
    }
  }
}
</script>

<style>
  .main-container {
    margin-top: 16px;
  }
</style>
