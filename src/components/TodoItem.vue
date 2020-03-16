<template>
  <div class="todo-item container" v-bind:class="{ 'is-completed': todo.completed }">
    <p>
      <input type="checkbox" v-on:change="$emit('mark-completed', todo)" />
      {{ todo.item }}
      <button @click="$emit('del-todo', todo.id)" class="del">
        <i class="far fa-trash-alt"></i>
      </button>
      <button @click="$emit('edit-todo', todo)" class="edit" v-b-modal.modal-1>
        <i class="fas fa-edit"></i>
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem", // component name
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-completed {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 3px 6px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
.edit {
  background: #7cd171;
  color: #fff;
  border: none;
  padding: 3px 5px;
  margin-right: 6px;
  /* border-radius: 50%; */
  cursor: pointer;
  float: right;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
</style>
