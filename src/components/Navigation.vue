<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-brand href="/">VueJS Bootstrap</b-navbar-brand> -->
      <div>
        <b-dropdown id="dropdown-1" text="Animals" class="m-md-2"  size="md">
          <b-dropdown-item><router-link to="/cats" class="blue-link">Cats</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/dogs" class="blue-link">Dogs</router-link></b-dropdown-item>
          <!-- <b-dropdown-item><router-link to="/pets" class="blue-link">Pets</router-link></b-dropdown-item> -->
        </b-dropdown>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="text-center" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Is this correct or i should use <b-nav-item href="/">Home</b-nav-item>  -->
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/quiz">Quiz</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: #fff;
  margin: 0 1.5em;
  font-size: 1.1em;
}

a:hover {
  text-decoration: none;
  color: #007bff;
}

.blue-link {
  color: #007bff;
}
</style>