<template>
  <router-link
      class="custom-link"
      :to="url"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: 'authLink',
  props: {
    url: String,
    text: String
  }
}
</script>

<style scoped>
  .custom-link {
    text-decoration: none;
    color: var(--el-color-primary)
  }
</style>