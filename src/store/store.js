import { createStore } from "vuex";

//api key 31abf315e391d1824b56e0f87a86abe2
//token 981204274b99921f0ca0180b6690e6da4cdcf34fbd246f064dc9efd4b60f051d

export const store = createStore({
  state: {
    boards: [],
  },
  mutations: {
    //sync
    //add new board
    ADD_BOARD(state, data) {
      if (state.boards.length < 1) {
        state.boards.push({
          id: 1,
          name: data.name,
          lists: [],
        });
      } else {
        state.boards.push({
          id: state.boards.slice(-1)[0].id + 1,
          name: data.name,
          lists: [],
        });
      }
    },
    //add new list
    ADD_LIST(state, data) {
      const boardID = data.boardID;
      const board = state.boards.find((b) => b.id === boardID);

      if (board.lists.length < 1) {
        board.lists.push({
          id: 1,
          name: data.name,
          tasks: [],
        });
      } else {
        board.lists.push({
          id: board.lists.slice(-1)[0].id + 1,
          name: data.name,
          tasks: [],
        });
      }
    },

    //add new task
    ADD_TASK(state, data) {
      const boardID = data.boardID;
      const listID = data.listID;

      const board = state.boards.find((b) => b.id === boardID);
      const list = board.lists.find((l) => l.id === listID);

      if (list.tasks.length < 1) {
        list.tasks.unshift({
          id: 1,
          text: data.text,
        });
      } else {
        list.tasks.unshift({
          id: list.tasks.slice(-1)[0].id + 1,
          text: data.text,
        });
      }
    },
    //add the board
    DELETE_BOARD(state, data) {
      const boardID = data.id;

      const board = state.boards.find((b) => b.id === boardID);
      const BoardIndex = state.boards.indexOf(board);

      state.boards.splice(BoardIndex, 1);
    },

    //add the list
    DELETE_LIST(state, data) {
      const boardID = data.boardID;
      const listID = data.listID;

      const board = state.boards.find((b) => b.id === boardID);
      const list = board.lists.find((l) => l.id === listID);
      const ListIndex = state.boards.indexOf(list);

      board.lists.splice(ListIndex, 1);
    },
    //add the task
    DELETE_TASK(state, data) {
      const boardID = data.boardID;
      const listID = data.listID;
      const taskID = data.taskID;

      const board = state.boards.find((b) => b.id === boardID);
      const list = board.lists.find((l) => l.id === listID);
      const task = list.tasks.find((t) => t.id === taskID);
      const TaskIndex = list.tasks.indexOf(task);

      list.tasks.splice(TaskIndex, 1);
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
    deleteBoard({ commit }, data) {
      commit("DELETE_BOARD", data);
    },
    deleteList({ commit }, data) {
      commit("DELETE_LIST", data);
    },
    deleteTask({ commit }, data) {
      commit("DELETE_TASK", data);
    },
  },
});

export default store;
