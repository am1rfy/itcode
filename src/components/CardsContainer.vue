<template>
  <div class="cards-container">
    <div class="card bg-dark">
      <h6 class="card-header">Path</h6>
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#" class="btn btn-outline-warning">Check out</a>
      </div>
    </div>
    <div class="card bg-dark">
      <h6 class="card-header">Path</h6>
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#" class="btn btn-outline-warning">Check out</a>
      </div>
    </div>
    <div class="card bg-dark">
      <h6 class="card-header">Path</h6>
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" class="btn btn-outline-warning">Check out</a>
      </div>
    </div>
    <div class="card bg-dark">
      <h6 class="card-header">Path</h6>
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Lorem ipsum</p>
        <a href="#" class="btn btn-outline-warning">Check out</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotesContainer"
}
</script>

<style scoped>
  .cards-container {
    margin-left: 5vh;
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    flex: 0 1 25%;
    margin: 0 16px 16px 16px;

    height: fit-content;
    width: fit-content;

    border-color: var(--bs-gray-600);
    color: white;
  }
  .card > .card-header {
    border-color: var(--bs-gray-600);
    color: var(--bs-gray-600);
  }
</style>