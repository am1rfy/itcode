<template>
  <div id="app">
    <HeaderComponent/>
    <LabelsBar/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import LabelsBar from './components/LabelsBar.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LabelsBar
  }
}
</script>

<style>

</style>
