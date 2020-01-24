<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">VueJS Bootstrap</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="text-center" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Is this correct or i should use <b-nav-item href="/">Home</b-nav-item>  -->
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/contact">Contact</router-link>
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
  color: #FFF;
  margin: 0 2em;
  font-size: 1.1em;
}

a:hover {
  text-decoration: none;
  color: #007BFF;
}
</style>