<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <form class="d-flex" role="search">
        <input class="form-control me-2 col-1" type="search" placeholder="Enter" aria-label="Search">
        <button class="btn btn-outline-warning" type="submit" v-on:click="notReady">Search</button>
      </form>
      <button class="btn btn-outline-warning" type="submit" v-on:click="notReady">Create</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LabelsBar',
  methods: {
    notReady: () => {
      alert('not ready')
    }
  }
}
</script>

<style scoped>
  .navbar {
    border-bottom: solid 1px var(--bs-gray-600);
  }
  .container-fluid > *{
    margin: 10px 0 10px 0;
  }
  .container-fluid > form > input,
  .container-fluid > form > button,
  .container-fluid > button{
    font-weight: bolder;
  }
  .container-fluid > .d-flex > button,
  .container-fluid > button {
    border-width: 2px;
  }
</style>