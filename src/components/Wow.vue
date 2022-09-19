<template>
  <button v-on:click="this.wow">{{ nameBtn }}</button>
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
  button {
    padding: 15px 20px;

    margin: 10px;
    cursor: pointer;

    background-color: white;

    border: 2px solid #42b983;
    border-radius: 14px;
  }
  button:hover {
    background-color: #bdefd4;
  }
</style>