import { API_BASE, KEYS } from "./consts";

function createTask(listID, name) {
  return fetch(`${API_BASE}/1/cards?${KEYS}&idList=${listID}&name=${name}`, {
    method: "POST",
  });
}

function deleteTask(taskID) {
  return fetch(`${API_BASE}/1/cards/${taskID}?${KEYS}`, { method: "DELETE" });
}

export const TasksAPI = {
  createTask,
  deleteTask,
};
