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
      <table class="task-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>タスク</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ task.content }}</td>
            <td v-if="task.status">完了</td>
            <td v-else>作業中</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const tasks = await $axios.$get('/api/tasks');
    return {
      tasks,
    };
  },
  data() {
    return {
      task: '',
      tasks: '',
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
    width: 100%;
    margin: 30px 0;
    padding: 10px 10px 10px 30px;
    color: #333;
    background: #eee;
  }
  &-form {
    &-input {
      box-sizing: border-box;
      max-width: 200px;
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
  &-table {
    width: 80%;
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;
    border: 1px solid #ccc;

    & th {
      padding: 10px;
      font-weight: bold;
      text-align: center;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-bottom: 2px solid #0099e3;
      background: #cee7ff;
    }

    & td {
      padding: 5px;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }
}
</style>
