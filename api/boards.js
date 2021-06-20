import { API_BASE, KEYS } from "./consts";

function fetchBoards() {
  return fetch(`${API_BASE}/1/members/me/boards?${KEYS}`);
}

function createBoard(name) {
  return fetch(`${API_BASE}/1/boards?${KEYS}&name=${name}`, { method: "POST" });
}

function deleteBoard(id) {
  return fetch(`${API_BASE}/1/boards/${id}?${KEYS}`, { method: "DELETE" });
}

function fetchLists(id) {
  return fetch(`${API_BASE}/1/boards/${id}/lists?${KEYS}`);
}

export const BoardsAPI = {
  fetchLists,
  fetchBoards,
  createBoard,
  deleteBoard,
};
