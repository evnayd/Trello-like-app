<template>
  <div class="list">
    <h1 class="list__name">{{ list.name }}</h1>
    <button class="list__delete" @click="removeList"></button>
    <button class="list__btn" v-on:click="showForm">Add task</button>
    <form class="create__form form" v-show="formisVisible">
      <input
        type="text"
        class="form__input"
        placeholder="Write your task here"
        v-model="taskName"
      />
      <button
        v-on:click.prevent="addTask"
        class="form__btn form__btn--ok"
        aria-label="Add new list"
      ></button>
      <button
        v-on:click.prevent="close"
        class="form__btn form__btn--close"
        aria-label="Close form"
      ></button>
    </form>
    <task
      v-for="task in list.tasks"
      :key="task.id"
      :task="task"
      :listID="listID"
      :boardID="boardID"
    >
    </task>
  </div>
</template>

<script>
import Task from "../components/Task.vue";
export default {
  components: { Task },
  props: {
    list: Object,
    name: String,
    id: String,
    boardID: String,
  },
  data() {
    return {
      formisVisible: false,
      taskName: "",
      listID: this.list.id,
      boardId: this.list.boardID,
    };
  },
  mounted() {
    this.$store.dispatch("getListTasks", {
      boardID: this.boardID,
      listID: this.listID,
    });
  },
  methods: {
    showForm() {
      this.formisVisible = true;
    },
    close() {
      this.formisVisible = false;
    },
    addTask() {
      const taskName = this.taskName.trim();
      if (taskName.length <= 0) {
        return;
      }
      this.$store.dispatch("createTask", {
        name: taskName,
        listID: this.listID,
      });
      this.taskName = "";
      this.formisVisible = false;
    },
    removeList() {
      this.$store.dispatch("deleteList", { listID: this.listID });
    },
  },
};
</script>

<style scoped>
.list {
  margin-bottom: 20px;
  width: 100%;
  background-color: #fff;
  padding: 8px;
  border-radius: 3px;
  text-align: left;
  position: relative;
}
.list__delete {
  position: absolute;
  background-image: url("../img/close_white.svg");
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  top: 22px;
  right: 10px;
  border: none;
  outline: none;
  background-color: #f2c13a;
  cursor: pointer;
}
.list__btn {
  margin-bottom: 10px;
  background-color: #59c0d1;
  outline: none;
  padding: 8px;
  border: none;
  border-radius: 3px;
  text-align: left;
  width: 100%;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.list__name {
  font-size: 16px;
  font-weight: 600;
}
.form__input {
  width: 100%;
  outline: none;
  border: 2px solid #59c0d1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
}
.form__btn {
  font-family: inherit;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
}
.form__btn--ok {
  background-image: url("../img/tick.svg");
}
.form__btn--close {
  background-image: url("../img/close.svg");
}
@media (min-width: 768px) {
  .list {
    width: 300px;
    margin-right: 15px;
  }
}
</style>
