<template>
  <header class="p-5">
    <div class="p-5 h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-7 align-self-end mt-5">
          <h1 class="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
          <hr class="divider my-4" />
        </div>

        <div class="col-lg-6 align-self-baseline pb-5">
          <p class="text-white h5 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
          <!-- Can i replace "a" tag with <router-link> -->
          <!-- <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> -->
          <!-- Can i put button inside router-link -->
          <router-link to="/about"><b-button class="pl-4 pr-4" variant="outline-primary">Find Out More</b-button></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
    background: url('../assets/bg-header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
h1, p {
    text-shadow: 2px 2px #000;
}

a {
    font-size: 1.2em;
}
</style>