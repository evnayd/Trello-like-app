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
  mounted() {
    this.$store.dispatch("getBoards");
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

@media (min-width: 768px) {
  .boards {
    display: flex;
    flex-direction: row;
    flex-flow: column wrap;
    max-height: 250px;
  }
}
</style>
