<template>
  <div class="board">
    <h1 class="board__title">
      {{ board.name }}
    </h1>
    <button class="board__btn" @click="removeBoard"></button>
    <create-list
      :boardID="boardID"
      :boardName="boardName"
      :key="board.id"
    ></create-list>
    <list
      v-for="list in board.lists"
      :key="list.id"
      :list="list"
      :boardID="boardID"
      :boardLists="board.lists"
    ></list>
  </div>
</template>

<script>
import CreateList from "../components/CreateList.vue";
import List from "../components/List.vue";
export default {
  components: { List, CreateList },
  props: { board: Object, name: String, id: Number, lists: Array },
  data() {
    return {
      boardName: this.board.name,
      boardID: this.board.id,
      boardLists: this.board.lists,
    };
  },
  methods: {
    removeBoard() {
      this.$store.dispatch("deleteBoard", {
        id: this.boardID,
      });
    },
  },
};
</script>

<style scoped>
.board {
  background-color: #f7ca4a;
  padding: 20px 10px 20px 10px;
  width: 100%;
  max-width: 400px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 15px;
  margin-right: 15px;
  position: relative;
}

.board:hover {
  background-color: #f2c13a;
}

.board__title {
  font-size: 20px;
  color: #4a4b4f;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
}

.board__btn {
  position: absolute;
  background-image: url("../img/close_white.svg");
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  top: 27px;
  right: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
