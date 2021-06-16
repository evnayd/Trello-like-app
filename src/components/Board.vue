<template>
  <router-link :to="{ name: 'Board', params: { id: board.id } }">
    <div class="board">
      <h1 class="board__title">
        {{ board.name }}
      </h1>
      <div>{{ board.id }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: { board: Object, name: String, id: Number },
};
</script>

<style scoped>
.board {
  background-color: #f7ca4a;
  padding: 20px 8px 20px 8px;
  width: 310px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 15px;
  margin-right: 15px;
}

.board:hover {
  background-color: #f2c13a;
}

.board__title {
  font-size: 16px;
  color: #4a4b4f;
}
</style>
