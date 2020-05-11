import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://todolist-nodejs-mysql.herokuapp.com",
  withCredentials: false,
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
});

export default {
  getTodos() {
    return apiClient.get("/api/todos");
  },
  updateTodo(id, item) {
    return apiClient.patch("/api/todo/" + id, item);
  },
  addTodo(item) {
    return apiClient.post("/api/todo", item);
  },
  deleteTodo(id) {
    return apiClient.delete("/api/todo/" + id);
  },
};
