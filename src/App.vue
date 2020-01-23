<template>
  <div id="app">
    <Navigation />
    <Header />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Header from './components/Header.vue';

export default {
  name: "app",
  components: {
    Navigation,
    Header
  }
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>