<template>
    <el-form
        ref="authForm"
        class="my-form"
        label-position="top"
        size="default"
        :hide-required-asterisk="true"
        :model="formData"
    >
      <el-form-item
          label="Username"
          prop="username"
          :rules="{required: true, message: 'username is required field'}"
      >
        <el-input
            v-model="formData.username"
            autocomplete="off"
        />
      </el-form-item>

      <el-form-item
          label="Password"
          prop="password"
          :rules="{required: true, message: 'password is required field'}"
      >
        <el-input
            v-model="formData.password"
            autocomplete="off"
            type="password"
        />
      </el-form-item>

      <el-form-item>
        <el-button
            class="custom-btn"
            type="success"
            @click="onSubmit"
        >
          Submit
        </el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.authForm.validate()

      if (isValid)
        this.$emit('onSubmit', this.formData.username, this.formData.password)
    }
  }
}
</script>

<style scoped>
  .my-form {
    background-color: #f6f8fa;

    padding: 48px 76px;
    margin-bottom: 16px;

    border: 1px solid var(--el-border-color);
    border-radius: 4px;
  }
  .custom-btn {
    margin-top: 8px;
    width: 100%;
  }
</style>