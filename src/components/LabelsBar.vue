<template>
  <div class="side-bar">
    <ul class="list-group">
      <li class="list-group-item" v-on:click="notReady">Label1</li>
      <li class="list-group-item" v-on:click="notReady">Label2</li>
      <li class="list-group-item" v-on:click="notReady">Label3</li>
      <li class="list-group-item" v-on:click="notReady">Label4</li>
      <li class="list-group-item" v-on:click="notReady">Label5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    notReady: () => {
      alert('not ready')
    }
  }
}
</script>

<style scoped>
  .side-bar {
    padding: 10px;
    width: 22.5%;
  }
  .list-group-item {
    padding: 25px;
    border: none;
    background-color: var(--bs-body-color);
    color: white;
    font-weight: bolder;
    cursor: pointer;
  }
  .list-group-item:hover {
    background-color: var(--bs-gray-800);
    color: var(--bs-warning);
  }
</style>