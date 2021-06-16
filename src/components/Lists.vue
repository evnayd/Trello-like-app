<template>
  <div class="lists">
    <list v-for="list in lists" :key="list.id" v-bind:list="list"></list>
  </div>
</template>

<script>
import List from "../components/List.vue";
export default {
  components: { List },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
  },
};
</script>

<style scoped>
.lists {
  width: 100%;
  text-align: center;
  margin-top: 35px;
}

@media (min-width: 768px) {
  .lists {
    display: flex;
    justify-content: flex-start;
    flex-flow: column wrap;
    max-height: 250px;
  }
}
</style>
