<template>
  <h6>RegisterPage</h6>
  <LoginForm
    @click="register"
    :username="username"
    :password="password"
  />
  <router-link to="/sign-in">
    Already have an account
  </router-link>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import { useUserStore } from '@/stores/userStore'

export default {
  name: 'RegisterPage',
  components: {
    LoginForm
  },
  data() {
    return {
      userStore: useUserStore(),

      // TODO: эти параметры передавать из формы при событии submit
      username: 'user',
      password: '12345678'
    }
  },
  methods: {
    async register(username, password) {

      // TODO: убрать хардкод
      [username, password] = [this.username, this.password]

      const {isSuccess, msg} = await this.userStore.handleRegister(username, password)

      // TODO: убрать
      console.log(isSuccess, msg)
    }
  }
}
</script>

<style scoped>
* {
  display: flex;
  justify-content: center;
  color: white;
}
</style>