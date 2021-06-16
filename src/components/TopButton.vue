<template>
  <button type="button" v-on:click="moveOnTop"></button>
</template>

<script>
export default {
  methods: {
    moveOnTop() {
      this.$emit("top");
    },
  },
};
</script>

<style scoped>
button {
  position: fixed;
  bottom: 5px;
  right: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 50px;
  width: 50px;
  transform: rotateY(0deg) rotate(-90deg);
  opacity: 0.7;
  background-color: #f7ca4a;
  border-radius: 4px;
  z-index: 60;
  transition: 0.3s linear;
  background-image: url("../img/button.svg");
}

button:hover {
  opacity: 1;
}

@media (min-width: 768px) {
  button {
    display: none;
  }
}
</style>
