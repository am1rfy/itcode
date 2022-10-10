<template>
  <HeaderComponent
    :active-label-name="activeLabelName"
  />
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
        title: String,
        cardsIds: Array
      },
    }
  },
  methods: {
    selectedLabelChanged(title, cardsIds) {
      [this.activeLabelInfo.title, this.activeLabelInfo.cardsIds] = [title, cardsIds]
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: 16px;
}
</style>
