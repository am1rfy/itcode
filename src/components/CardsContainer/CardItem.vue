<template>
  <div class="card bg-dark">
    <div class="card-header">
      <p class="card-title">{{card.title}}</p>
    </div>
    <div class="card-body">
      <p class="card-text"> {{card.text}} </p>
      <a class="btn btn-outline-warning">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
      </a>
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
  .card-header {
    display: flex;
    justify-content: space-between;
    border-color: var(--bs-gray-600);
  }
  .card-header > * {
    margin: 0;
  }
  .card-header > p {
    font-size: 1.1rem;
    font-weight: 500;
  }
  .card-header,
  .card-title,
  .card-text {
    cursor: default;
  }
  .btn {
    padding: 0
  }
</style>