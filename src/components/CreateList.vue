<template>
  <div class="create">
    <h1 class="create__title" v-on:click="showForm">Create new list</h1>
    <form class="create__form form" v-show="formisVisible">
      <input
        type="text"
        class="form__input"
        placeholder="Add list title"
        v-model="listName"
      />
      <button
        v-on:click.prevent="addList"
        class="form__btn form__btn--ok"
        aria-label="Add new list"
      ></button>
      <button
        class="form__btn form__btn--close"
        aria-label="Close form"
        v-on:click.prevent="close"
      ></button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formisVisible: false,
      listName: "",
    };
  },
  methods: {
    addList() {
      if (this.listName.trim().length == 0) {
        return;
      }
      this.$store.dispatch("addNewList", {
        name: this.listName,
      });
      this.listName = "";
      this.formisVisible = false;
    },
    showForm() {
      this.formisVisible = true;
    },
    close() {
      this.formisVisible = false;
    },
  },
};
</script>

<style scoped>
.create {
  background-color: #fff;
  padding: 12px;
  width: 100%;
  text-align: left;
  border-radius: 3px;
  cursor: pointer;
}

.create__title {
  font-size: 18px;
  margin: auto;
  padding-bottom: 5px;
  border-bottom: 2px solid #59c0d1;
}

.create__title:hover {
  background-color: #def4f7;
}

.form {
  margin-top: 10px;
}

.form__input {
  width: 100%;
  outline: none;
  border: 2px solid #59c0d1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
}

.form__btn {
  font-family: inherit;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
}

.form__btn--ok {
  background-image: url("../img/tick.svg");
}

.form__btn--close {
  background-image: url("../img/close.svg");
}

@media (min-width: 768px) {
  .create {
    width: 300px;
    position: relative;
    padding-bottom: 40px;
  }

  .form {
    position: absolute;
    top: -10px;
    right: -245px;
    background-color: #fff;
    border-radius: 3px;
    padding: 5px;
  }
}
</style>
