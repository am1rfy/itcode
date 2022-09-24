<template>
    <HeaderComponent/>
    <div class="main-container">
      <LabelsBar/>
      <CardsContainer/>
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
  }
}
</script>

<style>
  .main-container {
    margin-top: 16px;
  }
</style>
