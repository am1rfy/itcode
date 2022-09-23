<template>
  <button class="btn btn-primary" v-on:click="this.wow">{{ nameBtn }}</button>
</template>

<script>
export default {
  name: 'WowInstance',
  props: {
    nameBtn: String
  },
  methods: {
    wow: () => {
      alert('wow! you were able to')
    }
  }
}
</script>

<style scoped>

</style>