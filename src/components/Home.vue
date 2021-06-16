<template>
  <div class="home">
    <h1>Your workspace:</h1>
    <create-board></create-board>
    <boards></boards>
  </div>
</template>

<script>
import CreateBoard from "../components/CreateBoard.vue";
import Boards from "../components/Boards.vue";
export default {
  components: { CreateBoard, Boards },
};
</script>

<style scoped></style>
