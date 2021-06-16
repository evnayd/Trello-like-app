<template>
  <div class="boards">
    <board v-for="board in boards" :key="board.id" v-bind:board="board">
    </board>
  </div>
</template>
<script>
import Board from "../components/Board.vue";
export default {
  components: {
    Board,
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },
};
</script>

<style scoped>
.boards {
  padding-top: 40px;
}

.board {
  background-color: #f7ca4a;
  padding: 20px 8px 20px 8px;
  width: 100%;
  max-width: 310px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 15px;
  display: inline-block;
}

.board:hover {
  background-color: #f2c13a;
}

.board__title {
  font-size: 16px;
  color: #4a4b4f;
}

@media (min-width: 768px) {
  .boards {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
  }

  .board {
    width: 310px;
    margin-right: 20px;
  }
}
</style>
