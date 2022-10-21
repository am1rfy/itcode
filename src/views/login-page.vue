<template>
  <div class="common-layout">
    <el-container>

      <el-header class="header-container">
        <div class="flex-container el-flex-row">
          <el-icon size="30px">
            <UserFilled/>
          </el-icon>
          <p id="title">Sign in</p>
        </div>
      </el-header>

      <el-main>
        <div class="flex-container el-flex-col">
          <el-alert
              class="alert"
              v-if="errorMsg.length !== 0"
              :title="errorMsg"
              type="error"
              show-icon
              center
          />
          <authForm
              @onSubmit="login"
          />
          <authLink
              :url="'/sign-up'"
              :text="'No account yet'"
          />
        </div>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import authLink from '../components/auth-link.vue'
import authForm from '../components/auth-form.vue'
import { useUserStore } from '../stores/user-store.js'

export default {
  name: 'loginPage',
  components: {
    authForm,
    authLink
  },
  data() {
    return {
      userStore: useUserStore(),
      errorMsg: ''
    }
  },
  methods: {
    async login(username, password) {
      const {isSuccess, msg} = await this.userStore.handleLogin(username, password)
      // TODO: убрать
      console.log(isSuccess, msg)
      if (isSuccess)
        this.$router.push(`/`)
      else
        this.errorMsg = msg
    }
  }
}
</script>

<style scoped>
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-flex-col {
    flex-direction: column;
  }
  .el-flex-row {
    flex-direction: row;
  }
  .header-container {
    padding: 15vh 0 5vh 0;
  }
  #title {
    font-size: 30px;
    font-weight: bolder;
    margin-left: 5px;
  }
  .alert {
    margin-bottom: 16px;
    max-width: 346px;
    animation: showBlock 0.25s linear forwards;
  }
  @keyframes showBlock {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>