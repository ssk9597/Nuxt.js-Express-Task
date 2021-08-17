<template>
  <div class="task-wrapper">
    <div class="task-container">
      <h2 class="task-heading-ttl">Task App</h2>
      <h3 class="task-heading-sub">タスク追加</h3>
      <div class="task-form-container">
        <input type="text" class="task-form-input" placeholder="タスク" v-model="task" />
        <button class="task-form-button" @click="addTask()">追加</button>
      </div>
      <h3 class="task-heading-sub">タスク一覧</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
    };
  },
  methods: {
    addTask() {
      console.log(this.task);
      this.task = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  &-wrapper {
    background: #ccc;
    height: 100vh;
    width: 100%;
  }
  &-container {
    height: 100vh;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-heading-ttl {
    padding-top: 30px;
    padding-bottom: 20px;
    font-size: 2.5rem;
    color: #333;
    border-bottom: 3px solid #ccc;
  }
  &-heading-sub {
    margin: 30px 0;
    padding: 10px;
    color: #333;
    background: #eee;
  }
  &-form {
    &-input {
      box-sizing: border-box;
      max-width: 150px;
      height: 27px;
      margin: 4px 0;
      font-size: 16px;
      color: #333;
      border: 0;
      border-top: none;
      border-right: none;
      border-bottom: 1px solid #ccc;
      border-left: none;
      outline: 0;
      transition: 0.3s;
      &:focus {
        border: 1px solid #00b5ad;
        border-top: none;
        border-right: none;
        border-left: none;
      }
    }
    &-button {
      display: inline-block;
      padding: 0.4em 1.6em;
      font-size: 0.8rem;
      color: #00b5ad;
      text-decoration: none;
      user-select: none;
      border: 1px #00b5ad solid;
      border-radius: 20px;
      transition: 0.4s ease;
      background: #fff;
      &:hover {
        color: #fff;
        background: #00b5ad;
      }
    }
  }
}
</style>
