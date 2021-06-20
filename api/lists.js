import { API_BASE, KEYS } from "./consts";

function createList(boardID, name) {
  return fetch(`${API_BASE}/1/lists?${KEYS}&name=${name}&idBoard=${boardID}`, {
    method: "POST",
  });
}

function deleteList(listID) {
  return fetch(`${API_BASE}/1/lists/${listID}/closed?${KEYS}&value=true`, {
    method: "PUT",
  });
}

function fetchTasks(listID) {
  return fetch(`${API_BASE}/1/lists/${listID}/cards?${KEYS}`);
}

export const ListsAPI = {
  createList,
  deleteList,
  fetchTasks,
};
