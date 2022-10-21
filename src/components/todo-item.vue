<template>
  <el-card
      class="box-card"
      shadow="hover"
      @dblclick="$emit('cardDblClick', id)"
  >
    <template #header>
      <div class="card-header">
        <p id="title">
          {{title}}
        </p>

        <div class="flex-grow" />

        <el-dropdown
            trigger="click"
        >
          <span class="el-dropdown-link">
            <el-icon size="24px"><More /></el-icon>
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                  @click="$emit('switchDoneStatus', id)"
              >
                {{doneSwitchTitle}}
              </el-dropdown-item>

              <el-dropdown-item
                  @click="$emit('deleteItem', id)"
              >
                Delete note
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>

        </el-dropdown>
      </div>
    </template>
    <div
        class="text item"
        id="text"
    >
      {{text}}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'todoItem',
  props: {
    id: Number,
    title: String,
    text: String,
    isDone: Boolean
  },
  computed: {
    doneSwitchTitle() {
      return this.isDone ? 'Uncheck item' : 'Mark as checked'
    }
  }
}
</script>

<style scoped>
  .box-card {
    width: 600px;
    margin: 0 auto 20px auto;
  }
  .card-header {
    display: flex;
  }
  .el-dropdown-link {
    color: #303133;

    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
  }
  #title {
    color: #303133;

    display: flex;
    align-items: center;

    font-weight: bolder;
  }
  .el-dropdown-link:hover {
    background-color: var(--el-border-color-light)
  }
  #title,
  #text {
    cursor: default;
    text-align: start;
  }
  .flex-grow {
    flex-grow: 1;
  }
</style>