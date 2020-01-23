<template>
  <header>
    <div class="p-5">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-7 align-self-end mt-5">
          <h1 class="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
          <hr class="divider my-4" />
        </div>

        <div class="col-lg-6 align-self-baseline pb-5">
          <p class="text-white h5 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
          <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
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

    div {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    h1, p {
        text-shadow: 2px 2px #000;
    }
</style>