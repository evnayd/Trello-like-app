<template>
  <div class="popup">
    <div class="backdrop" v-on:click.prevent="closeModal">
      <form class="popup__details details">
        <button
          class="details__btn details__btn--ok"
          aria-label="Add new board"
          v-on:click.prevent="addBoard"
        ></button>
        <button
          class="details__btn details__btn--close"
          aria-label="Close modal"
          v-on:click.prevent="closeModal"
        ></button>
        <input
          type="text"
          class="details__input"
          placeholder="Add board title"
          v-model="boardName"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardName: "",
    };
  },
  methods: {
    closeModal(e) {
      if (
        e.target.classList.contains("backdrop") ||
        e.target.classList.contains("details__btn--close")
      ) {
        this.$emit("close");
      }
      return;
    },
    addBoard() {
      if (this.boardName.trim().length == 0) {
        return;
      }

      this.$store.dispatch("addNewBoard", {
        name: this.boardName,
      });
      this.boardName = "";
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.details {
  padding: 50px;
  width: 95%;
  border-radius: 3px;
  color: #fff;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: right;
}

.details__input {
  width: 100%;
  outline: none;
  border: 2px solid #59c0d1;
  padding: 10px;
}

.details__btn {
  font-family: inherit;
  width: 32px;
  height: 32px;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 5px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
}

.details__btn--ok {
  background-image: url("../img/tick.svg");
}

.details__btn--close {
  background-image: url("../img/close.svg");
}

@media (min-width: 768px) {
  .details {
    width: 400px;
  }
}
</style>
