import { createStore } from "vuex";
//import Vue from "vue"; //
//import Vuex from "vuex"; //

//Vue.use(Vuex); //

export const store = createStore({
  state: {
    boards: [],
    lists: [],
    tasks: [],
  },
  mutations: {
    //syncrous
    ADD_BOARD(state, data) {
      if (state.boards.length < 1) {
        state.boards.push({
          id: 1,
          name: data.name,
        });
      } else {
        state.boards.push({
          id: state.boards.slice(-1)[0].id + 1,
          name: data.name,
        });
      }
    },
    ADD_LIST(state, data) {
      if (state.lists.length < 1) {
        state.lists.push({
          id: 1,
          name: data.name,
        });
      } else {
        state.lists.push({
          id: state.lists.slice(-1)[0].id + 1,
          name: data.name,
        });
      }
    },
    ADD_TASK(state, data) {
      if (state.tasks.length < 1) {
        state.tasks.unshift({
          id: 1,
          text: data.text,
        });
      } else {
        state.tasks.unshift({
          id: state.tasks.slice(-1)[0].id + 1,
          text: data.text,
        });
      }
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    //async
    addNewBoard({ commit }, data) {
      commit("ADD_BOARD", data);
    },
    addNewList({ commit }, data) {
      commit("ADD_LIST", data);
    },
    addNewTask({ commit }, data) {
      commit("ADD_TASK", data);
    },
    deleteTask({ commit }, data) {
      commit("DELETE_TASK", data);
    },
  },
});

export default store;
