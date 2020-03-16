<template>
  <div class="wrapper">
    <form @submit.prevent="addTodo">
      <input type="text" v-model="item" name="item" placeholder="Add Todo ...." />
      <input type="submit" value="Add Item" class="btn" />
    </form>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      item: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        item: this.item,
        completed: 0
      };
      // Send up to parent
      this.$emit("add-todo", newTodo);

      this.item = "";
    }
  }
};
</script>
<style scoped>
.wrapper {
  max-width: 90%;
  margin: 0 auto;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
</style>
