<template>
  <div class="create" v-on:click="openModal">
    <h1 class="create__title">Create new board</h1>
  </div>
  <create-popup v-show="PopupisVisible" @close="closeModal"></create-popup>
</template>

<script>
import CreatePopup from "../components/CreatePopup.vue";
export default {
  components: { CreatePopup },
  data() {
    return {
      PopupisVisible: false,
    };
  },
  methods: {
    closeModal() {
      this.PopupisVisible = false;
    },
    openModal() {
      this.PopupisVisible = true;
    },
  },
};
</script>

<style scoped>
.create {
  background-color: #fff;
  padding: 20px 8px 20px 8px;
  width: 310px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
.create:hover {
  background-color: #def4f7;
}
.create__title {
  font-size: 16px;
}
</style>
