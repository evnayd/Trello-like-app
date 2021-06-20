import { createStore } from "vuex";
import { BoardsAPI } from "../../api/boards";
import { ListsAPI } from "../../api/lists";
import { TasksAPI } from "../../api/tasks";

export const store = createStore({
  state: {
    boards: [],
  },
  mutations: {
    // Boards
    SET_BOARDS(state, boards) {
      state.boards = [...boards];
    },
    SET_BOARD_LISTS(state, data) {
      const { boardID, lists } = data;
      const boardIndex = state.boards.findIndex((b) => b.id === boardID);

      if (boardIndex !== -1) {
        state.boards[boardIndex].lists = [...lists];
      }
    },
    ADD_BOARD(state, board) {
      state.boards.push(board);
    },
    REMOVE_BOARD(state, id) {
      const filtered = state.boards.filter((b) => b.id !== id);
      state.boards = [...filtered];
    },
    // Lists
    ADD_LIST(state, list) {
      const boardIndex = state.boards.findIndex((b) => b.id === list.boardID);

      if (boardIndex !== -1) {
        const boardLists = state.boards[boardIndex].lists;
        state.boards[boardIndex].lists = [list, ...boardLists];
      }
    },
    REMOVE_LIST(state, { listID, boardID }) {
      const boardIndex = state.boards.findIndex((b) => b.id === boardID);

      if (boardIndex !== -1) {
        const boardLists = state.boards[boardIndex].lists;
        const filteredLists = boardLists.filter((l) => l.id !== listID);
        state.boards[boardIndex].lists = [...filteredLists];
      }
    },
    // Tasks
    SET_LIST_TASKS(state, data) {
      const { boardID, listID, tasks } = data;
      const boardIndex = state.boards.findIndex((b) => b.id === boardID);

      if (boardIndex !== -1) {
        const board = state.boards[boardIndex];
        const listIndex = board.lists.findIndex((l) => l.id === listID);

        if (listIndex !== -1) {
          state.boards[boardIndex].lists[listIndex].tasks = [...tasks];
        }
      }
    },
    ADD_TASK(state, data) {
      const { boardID, listID, task } = data;
      const boardIndex = state.boards.findIndex((b) => b.id === boardID);

      if (boardIndex !== -1) {
        const board = state.boards[boardIndex];
        const listIndex = board.lists.findIndex((l) => l.id === listID);

        if (listIndex !== -1) {
          state.boards[boardIndex].lists[listIndex].tasks.push(task);
        }
      }
    },
    REMOVE_TASK(state, data) {
      const { boardID, listID, taskID } = data;
      const boardIndex = state.boards.findIndex((b) => b.id === boardID);

      if (boardIndex !== -1) {
        const board = state.boards[boardIndex];
        const listIndex = board.lists.findIndex((l) => l.id === listID);

        if (listIndex !== -1) {
          const list = state.boards[boardIndex].lists[listIndex];
          const filtered = list.tasks.filter((t) => t.id !== taskID);
          state.boards[boardIndex].lists[listIndex].tasks = [...filtered];
        }
      }
    },
  },
  actions: {
    // Boards
    async getBoards({ commit }) {
      try {
        const response = await BoardsAPI.fetchBoards();
        const json = await response.json();
        const boards = json.map((board) => ({
          id: board.id,
          name: board.name,
          lists: [],
        }));
        commit("SET_BOARDS", boards);
      } catch (error) {
        console.error(error);
      }
    },
    async createBoard({ commit }, { name }) {
      try {
        const response = await BoardsAPI.createBoard(name);
        const createdBoard = await response.json();
        commit("ADD_BOARD", {
          id: createdBoard.id,
          name: createdBoard.name,
          lists: [],
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBoard({ commit }, { id }) {
      try {
        const response = await BoardsAPI.deleteBoard(id);
        await response.json();
        commit("REMOVE_BOARD", id);
      } catch (error) {
        console.error(error);
      }
    },
    async getBoardLists({ commit }, { boardID }) {
      try {
        const response = await BoardsAPI.fetchLists(boardID);
        const json = await response.json();
        const lists = json.map((list) => ({
          id: list.id,
          boardID: list.idBoard,
          name: list.name,
        }));
        commit("SET_BOARD_LISTS", { boardID, lists });
      } catch (error) {
        console.error(error);
      }
    },
    // Lists
    async createList({ commit }, { boardID, name }) {
      try {
        const response = await ListsAPI.createList(boardID, name);
        const createdList = await response.json();
        const list = {
          id: createdList.id,
          boardID: createdList.idBoard,
          name: createdList.name,
          tasks: [],
        };
        commit("ADD_LIST", list);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteList({ commit }, { listID }) {
      try {
        const response = await ListsAPI.deleteList(listID);
        const deletedList = await response.json();
        commit("REMOVE_LIST", { listID, boardID: deletedList.idBoard });
      } catch (error) {
        console.error(error);
      }
    },
    async getListTasks({ commit }, { boardID, listID }) {
      try {
        const response = await ListsAPI.fetchTasks(listID);
        const json = await response.json();
        const tasks = json.map((task) => ({
          id: task.id,
          boardID: task.idBoard,
          listID: task.idList,
          name: task.name,
        }));
        commit("SET_LIST_TASKS", { boardID, listID, tasks });
      } catch (error) {
        console.error(error);
      }
    },
    // Tasks
    async createTask({ commit }, { listID, name }) {
      try {
        const response = await TasksAPI.createTask(listID, name);
        const json = await response.json();
        const boardID = json.idBoard;
        const task = {
          id: json.id,
          boardID,
          listID: json.idList,
          name: json.name,
        };
        commit("ADD_TASK", { boardID, listID, task });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask({ commit }, { boardID, listID, taskID }) {
      try {
        const response = await TasksAPI.deleteTask(taskID);
        await response.json();
        commit("REMOVE_TASK", { boardID, listID, taskID });
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default store;
