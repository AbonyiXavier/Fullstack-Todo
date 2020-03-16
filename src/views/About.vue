<template>
  <div>
    <Header />
    <div class="about">
      <h1>X-todo</h1>
      <p>An app that helps you plan your time. Todolist v1.0.0</p>
    </div>
    <div class="dashboard">
      <router-link to="/dashboard">
        <b-button variant="dark">Dashboard</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
export default {
  name: "about",
  components: {
    Header
  }
};
</script>

<style scoped>
.about {
  padding-left: 20px;
  font-family: "Trade Winds", cursive;
}
.dashboard {
  margin-left: 20px;
}
</style>
