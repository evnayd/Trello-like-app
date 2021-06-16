<template>
  <div class="task">
    <p class="task__text">{{ task.text }}</p>
    <button class="task__btn"></button>
  </div>
</template>

<script>
export default {
  props: { task: Object, text: String, id: Number },
};
</script>

<style scoped>
.task {
  margin-bottom: 10px;
  background-color: #f7ca4a;
  padding: 8px;
  border-radius: 3px;
  text-align: left;
  width: 100%;
  position: relative;
}

.task__text {
  margin: auto;
}

.task__btn {
  position: absolute;
  background-image: url("../img/close_white.svg");
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  top: 7px;
  right: 5px;
  border: none;
  outline: none;
  background-color: transparent;
}

h1 {
  font-size: 18px;
  font-weight: 600;
}
</style>
