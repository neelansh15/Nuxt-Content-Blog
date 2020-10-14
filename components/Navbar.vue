<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="padding: 1em 2em">
      <nuxt-link class="navbar-brand" to="/">Technospective</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="(activePage == 'Home') ? 'active': ''"  @click="$store.commit('setActivePage', 'Home')">
            <nuxt-link class="nav-link" to="/">
              Home
              <!-- <span class="sr-only">(current)</span> -->
          </nuxt-link>
          </li>
          <li class="nav-item" :class="(activePage == 'All Posts') ? 'active': ''" @click="$store.commit('setActivePage', 'All Posts')">
            <nuxt-link class="nav-link" to="/posts">
            All Posts
            </nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Topics</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Web Development</a>
              <a class="dropdown-item" href="#">App Development</a>
              <a class="dropdown-item" href="#">VueJS</a>
              <a class="dropdown-item" href="#">ReactJS</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">All Topics</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    activePage(){
      return this.$store.state.activePage
    },
  },
};
</script>

<style>
nav{
  background-color: antiquewhite;
}
</style>