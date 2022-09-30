<template>
    <HeaderComponent/>
    <div class="main-container">
      <LabelsBar @selectedLabelChanged="selectedLabelChanged"/>
      <CardsContainer :active-cards-ids="activeCardsIds"/>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import LabelsBar from './components/LabelsBar.vue'
import CardsContainer from './components/CardsContainer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LabelsBar,
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
