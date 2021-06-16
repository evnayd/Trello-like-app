<template>
  <div class="board-page">
    <h1 class="board-page__title">
      Board name
    </h1>
    <create-list></create-list>
    <lists></lists>
  </div>
</template>

<script>
import CreateList from "../components/CreateList.vue";
import Lists from "../components/Lists.vue";
export default {
  components: { CreateList, Lists },
};
</script>

<style scoped>
.board-page {
  min-height: 100vh;
}

.board-page__title {
  margin-top: 10px;
  font-size: 24px;
  color: #fff;
}
</style>
