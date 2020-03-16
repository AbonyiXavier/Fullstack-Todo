<template>
  <header class="header">
    <h1>TodoList</h1>
    <div id="nav">
      <router-link class="none" to="/">Home</router-link>|
      <router-link class="none" to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #fff;
  padding-right: 5px;
}
#nav .none {
  text-decoration: none;
}
</style>