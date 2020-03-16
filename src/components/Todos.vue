<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem
        v-bind:todo="todo"
        v-on:del-todo="$emit('del-todo', todo.id)"
        v-on:edit-todo="$emit('edit-todo', todo)"
        v-on:mark-completed="$emit('mark-completed', todo)"
      />
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos", // component name
  components: {
    TodoItem
  },
  props: ["todos"] // name of the data been called on the dashboard.vue
};
</script>

<style scoped></style>
