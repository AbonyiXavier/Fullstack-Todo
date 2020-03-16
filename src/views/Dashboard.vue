<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos
      v-bind:todos="todos"
      v-on:del-todo="deleteTodo"
      v-on:edit-todo="editTodo"
      v-on:mark-completed="markCompleted"
    />

    <div>
      <b-modal
        id="modal-1"
        title="Edit your Todo"
        cancel-variant="danger"
        ok-title="Confirm"
        hide-footer
      >
        <textarea class="textarea" cols="40" rows="2" v-model="task"></textarea>
        <div>
          <button class="btn-confirm" @click="ok()">Confrim</button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      task: "",
      todoItem: {}
    };
  },
  methods: {
    fetchTodos() {
      axios
        .get("http://localhost:7000/api/todos")
        .then(res => (this.todos = res.data.results))
        .catch(err => console.log(err));
    },
    markCompleted(todo) {
      // alert(todo.id);
      axios
        .patch(`http://localhost:7000/api/todo/${todo.id}`, {
          item: todo.item,
          completed: !todo.completed
        })
        .then(() => {
          this.fetchTodos();
        })
        .catch(err => console.log("my error", err));
    },
    ok() {
      axios
        .patch(`http://localhost:7000/api/todo/${this.todoItem.id}`, {
          item: this.task
        })
        .then(() => {
          this.$bvModal.hide("modal-1");
          this.fetchTodos();
        })
        .catch(err => console.log("my error", err));
    },
    editTodo(todo) {
      this.todoItem = todo;
      this.task = todo.item;
    },
    deleteTodo(id) {
      axios
        .delete(`http://localhost:7000/api/todo/${id}`)
        .then(
          res => (
            (this.todos = this.todos.filter(todo => todo.id !== id)),
            res.data.results
          )
        )
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { item, completed } = newTodo;
      console.log(newTodo);
      axios
        .post("http://localhost:7000/api/todo", {
          item,
          completed
        })
        .then(res => {
          this.todos = [...this.todos, res.data.results];
          this.fetchTodos();
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://localhost:7000/api/todos")
      .then(res => (this.todos = res.data.results))
      .catch(err => console.log(err));
  }
};
</script>

<style>
.container {
  max-width: 90%;
  margin: 0px auto;
  padding: 0px auto;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  font-size: 14px;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
.btn-confirm {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  margin-left: 25vw;
  cursor: pointer;
}
.btn-confirm:hover {
  background: #666;
}
</style>
