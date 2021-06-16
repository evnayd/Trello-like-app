<template>
  <div class="list">
    <h1>{{ list.name }}</h1>
    <button class="list__btn" v-on:click="showForm">Add another task</button>
    <form class="create__form form" v-show="formisVisible">
      <input
        type="text"
        class="form__input"
        placeholder="Write your task here"
        v-model="taskText"
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
      v-for="(task, index) in tasks"
      :key="task.index"
      v-bind:task="task"
      v-on:click="removeTheTask(index)"
    >
    </task>
  </div>
</template>

<script>
import Task from "../components/Task.vue";
export default {
  components: { Task },
  props: { list: Object, name: String, id: Number },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  data() {
    return {
      formisVisible: false,
      taskText: "",
    };
  },
  methods: {
    showForm() {
      this.formisVisible = true;
    },
    close() {
      this.formisVisible = false;
    },
    addTask() {
      if (this.taskText.trim().length == 0) {
        return;
      }
      this.$store.dispatch("addNewTask", {
        text: this.taskText,
      });
      this.taskText = "";
      this.formisVisible = false;
    },
    removeTheTask(index) {
      this.$store.dispatch("deleteTask", index);
    },
  },
};
</script>

<style scoped>
.list {
  margin-bottom: 15px;
  width: 100%;
  background-color: #fff;
  padding: 8px;
  border-radius: 3px;
  text-align: left;
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

h1 {
  font-size: 18px;
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
