<template>
  <div>
    <b-navbar class="home" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="x-todo">X-todo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/dashboard">
            <b-button class="hover" variant="light">Get started</b-button>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <section class="home-img">
        <div class="banner">
          <h2 class="banner-title">Welcome to My Todo..........</h2>
          <h4>Plan your time, live happy</h4>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style scoped>
.x-todo {
  font-family: "Trade Winds", cursive;
}
.hover:hover {
  color: #fff;
}
.home-img {
  background: url("../assets/pexels-photo-748598.jpeg") center/cover no-repeat;
  min-height: 100vh;
  background-color: #212529;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner {
  text-align: center;
  background: #212529;
  opacity: 0.6;
  display: inline-block;
  padding: 2rem;
}

.banner-title {
  text-transform: uppercase;
  margin-bottom: 3rem;
  color: #fff;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-family: "Trade Winds", cursive;
  font-family: "Indie Flower", cursive;
  font-family: "Dancing Script", cursive;
  font-family: "Permanent Marker", cursive;
}
h4 {
  color: #fff;
  font-weight: bold;
  font-family: "Trade Winds", cursive;
  font-family: "Indie Flower", cursive;
  font-family: "Dancing Script", cursive;
}
</style>
