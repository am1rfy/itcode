<template>
  <div class="card bg-dark">
    <div class="card-header">
      <h6>{{card.path}}</h6>
      <h6>{{card.date}}</h6>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{card.title}}</h5>
      <p class="card-text"> {{card.text}} </p>
      <a class="btn btn-outline-warning">Check out</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    card: {
      id: Number,
      title: String,
      path: String,
      date: String,
      text: String,
    }
  }
}
</script>

<style scoped>
  .card {
    flex: 0 1 25%;
    margin: 0 16px 16px 16px;

    height: fit-content;
    width: fit-content;

    border-color: var(--bs-gray-600);
    color: white;
  }
  .card > .card-header {
    display: flex;
    justify-content: space-between;
    border-color: var(--bs-gray-600);
    color: var(--bs-gray-600);
  }
  .card > .card-header > * {
    margin: 0;
  }
</style>